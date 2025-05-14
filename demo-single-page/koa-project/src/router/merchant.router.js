const nodemailer = require('nodemailer');
const syncFs = require('fs')
const fs = require('fs').promises;
const path = require('path');
// 创建邮件传输器
const transporter = nodemailer.createTransport({
    service: '163', // 例如 'gmail', 'qq', '163' 等
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: 'zx3434241933@163.com',
        pass: 'PBhwZ3BwcGVQ74C8' // 或 app password
    }
});
// 存储验证码和过期时间的键值对
const verificationCodes = new Map();
// 生成六位验证码
function generateVerificationCode() {
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}
const Router = require('@koa/router');
const router = new Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../UserController')
const { searchMerchant, createMerchant } = require('../service/merchant.service')
//创建和登录用户
router.post('/api/merchants_login', async (ctx, next) => {
    const {merchant_email, merchant_captcha} = ctx.request.body;
    console.log('验证码',merchant_captcha);
    // 获取存储的验证码
    const storedCode = verificationCodes.get(merchant_email);
    // 验证验证码是否有效
    if (!storedCode || storedCode.code !== merchant_captcha || Date.now() > storedCode.expires) {
        ctx.status = 400; // Bad Request
        ctx.body = { message: '无效或过期的验证码' };
        console.log('验证码验证失败')
        // 清除已经失效的验证码
        if ( storedCode && Date.now() > storedCode.expires) {
            verificationCodes.delete(merchant_email);
        }
        return; // 停止后续操作
    }
    // 验证码验证成功，清除验证码
    verificationCodes.delete(merchant_email);
    console.log('验证码验证成功')
    try {
        //检查用户是否存在
        const search = await searchMerchant(merchant_email);
        console.log('用户',search);
        if (ctx.request.body && search === undefined && merchant_captcha) {
            console.log('用户未创建',ctx.request.body);
            await createMerchant(merchant_email);
            console.log('创建用户成功')
            const newSearch = await searchMerchant(merchant_email);
            console.log('查询到用户',newSearch)
            const token = jwt.sign({merchant_email: merchant_email, merchant_uid: newSearch.merchant_uid}, JWT_SECRET, { expiresIn: '24h' });
            ctx.status = 201;
            ctx.body = {
                mission: '用户未存在,已成功创建',
                merchant: {
                    merchant_name: newSearch.merchant_name,
                    merchant_email: newSearch.merchant_email,
                    merchant_uid: newSearch.merchant_uid,
                    merchant_headshot: `http://localhost:3000${newSearch.merchant_headshot}`,
                },
                merchant_token: token,
            }
        }
        else {
            console.log('用户已创建')
            const newSearch = await searchMerchant(merchant_email);
            if (ctx.headers.authorization) {
                console.log('有token:', ctx.headers.authorization);
                console.log('登录状态');
            } else {
                console.log('无token')
                console.log('离线状态')
            }
            const token = jwt.sign({merchant_email: merchant_email, merchant_uid: newSearch.merchant_uid}, JWT_SECRET, { expiresIn: '24h' });
            ctx.body = {
                mission: '用户已存在',
                merchant: {
                    merchant_name: newSearch.merchant_name,
                    merchant_email: newSearch.merchant_email,
                    merchant_uid: newSearch.merchant_uid,
                    merchant_headshot: `http://localhost:3000${newSearch.merchant_headshot}`,
                },
                merchant_token: token,
            }
            ctx.status = 200;
        }
    } catch (err) {
        console.error('用户注册/登录错误:', err); // 更详细的错误信息
        ctx.throw(500, '服务器内部错误'); // Internal Server Error
        console.log(err);
    }
    await next()
})
// 发送邮件验证码的路由
router.post('/api/merchants_captcha', async (ctx,next) => {
    try {
        const { to } = ctx.request.body; // 获取邮件信息
        console.log('触发商家邮件', to)
        // 检查是否已存在该邮箱的验证码，如果存在则删除
        if (verificationCodes.has(to)) {
            console.log('删除之前的商家验证码 for', to);
            verificationCodes.delete(to);
        }
        // 生成验证码并设置过期时间
        const verificationCode = generateVerificationCode();
        const expirationTime = Date.now() + 30 * 60 * 1000; // 30分钟过期
        verificationCodes.set(to, { code: verificationCode, expires: expirationTime });
        // 读取 HTML 文件内容
        const emailTemplatePath = path.join(__dirname,'../../static/emailHtml.html'); // 调整路径
        let htmlContent = await fs.readFile(emailTemplatePath, 'utf-8');
        // 替换验证码占位符
        htmlContent = htmlContent.replace('${verificationCode}', verificationCode);
        const mailOptions = {
            from: 'zx3434241933@163.com',
            to,
            subject: '验证你的邮箱', // 设置默认主题
            html: htmlContent // 设置默认内容
        };
        await transporter.sendMail(mailOptions); // 发送邮件
        ctx.body = { message: '邮件发送成功' }; // 返回成功信息
    } catch (error) {
        console.error('Error sending email:', error);
        ctx.throw(500, 'Failed to send email'); // 抛出错误
    }
    await next()
});
module.exports = router;