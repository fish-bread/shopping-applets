import {create_request_body, login_request_body,} from "@/request/index";
import {exit_user, isLogin, user, user_login, user_token} from "@/function/user";
//验证码
export const captcha_func = () => login_request_body (
    'post', 
    '/api/user_sendEmail', 
    {to: user_login.value.user_email}
).then((res) => {
    console.log('请求成功')
    console.log(res)
}).catch((err) => {
    console.log('请求失败')
    console.log(err)
})
//登录
export const login_func = () => login_request_body(
    'post',
    '/api/user_login_email',
    {
        user_email: user_login.value.user_email, 
        user_captcha: user_login.value.user_captcha,
    }).then(async res => {
    console.log('请求成功')
    console.log(res)
    await wx.setStorage({
        key: 'user', 
        data: res.user
    })
    await wx.setStorage({
        key: 'user_token',
        data: res.user_token
    })
    console.log('登录', await wx.getStorage({key:'user'}), await wx.getStorage({key: 'user_token'}))
    wx.reLaunch({
        url: '/pages/home/index'
    })
    }).catch((err) => {
    console.log('请求失败')
        console.log(err)
})
//确保登录状态
export const check_user_func = async () => create_request_body (
    'post',
    '/api/user_login_token',
    { data: '111' },
    user_token.value.data,
).then(res => {
    console.log(res.message)
    if (user_token.value.data === undefined) {
        isLogin.value = false
        return false
    } else {
        isLogin.value = true
        return true
    }
    
}).catch((err) => {
    console.log(err.message)
    isLogin.value = false
    return false
})