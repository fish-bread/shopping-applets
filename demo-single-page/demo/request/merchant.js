import { login_request_body} from "@/request/index";
import { login_merchant } from "@/function/merchant";

export const login_merchant_captcha = () => login_request_body(
    'post',
    '/api/merchants_captcha',
    { 
        to: login_merchant.value.merchant_email,
    }
).then((res) => {
    console.log('接收验证码',res.message)
    wx.showToast({
        title: '验证码已发送',
        icon: 'success'
    });
}).catch((err) => {
    console.log(err)
})
export const login_merchant_login = () => login_request_body(
    'post',
    '/api/merchants_login',
    { 
        merchant_email: login_merchant.value.merchant_email,
        merchant_captcha: login_merchant.value.merchant_captcha
    },
).then((res) => {
    if (res.message !== '无效或过期的验证码') {
        console.log('验证成功',res.mission)
        console.log('商家', res.merchant)
        wx.showToast({
            title: '验证成功',
            icon: 'success'
        });
        console.log('res',res)
    }
    else {
        wx.showToast({
            title: '验证码错误',
            icon: 'error'
        });
    }
}).catch((err) => {
    console.log(err)
    wx.showToast({
        title: '验证失败',
        icon: 'error'
    });
})