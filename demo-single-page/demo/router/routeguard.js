// router.js
import { check_user_func } from '@/request/login'; // 假设这是你的用户检查函数
import { router_login } from '@/router';
import {title_text} from "@/function/navBar"; // 导入你的路由函数

// 封装一个带守卫的路由跳转函数
export const guardedNavigateTo = (url, title) => {
    console.log('路由文本',title);
    check_user_func().then((res) => {
        if (res === true) {
            if (typeof title === 'string') {  // 确保title是字符串
                title_text.value = title;
            }
            // 检查成功，执行跳转
            wx.navigateTo({
                url: url
            });
        }
        else {
            // 检查失败，跳转到登录页
            router_login(); 
        }
    })
};

// 封装一个带守卫的 reLaunch 函数
export const guardedReLaunch = (url) => {
    check_user_func().then((res) => {
        if (res === true) {
            // 检查成功，执行跳转
            wx.reLaunch({
                url: url
            });
        }
        else {
            // 检查失败，跳转到登录页
            router_login();
        }
    })
};

// 封装一个带守卫的 redirectTo 函数
export const guardedRedirectTo = (url) => {
    check_user_func().then(() => {
        wx.redirectTo({
            url: url
        });
    }).catch(() => {
        router_login();
    });
};