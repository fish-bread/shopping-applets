import { ref } from 'vue'
import {check_user_func} from "@/request/login";
export const isLogin = ref(false);
export const isChangeUsername = ref(false);
export const user = ref({user_uid: '' , user_name: '', user_email: '', user_headshot: ''})
export const user_token = ref('')
export const user_login = ref({
    user_email: '',
    user_captcha:''
})
export const change_user_name_ref = ref('')
//获取用户
export const initialize_user = async () => {
    console.log("初始化用户")
    user.value = await wx.getStorage({key:'user'})
    user_token.value = await wx.getStorage({key:'user_token'})
    await check_user_func()
    console.log('user', user.value.data)
    console.log('token',user_token.value.data)
}
//退出登录
export const exit_user = async () => {
    try {
        console.log('退出登录')
        await wx.clearStorage(); // 确保等待存储清除完成
        isLogin.value = false;
        wx.reLaunch({
            url: '/pages/home/index' // 重新启动到首页
        });
    } catch (error) {
        console.error('退出登录失败:', error);
        // 可以添加错误处理逻辑，如提示用户
    }
}