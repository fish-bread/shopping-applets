import {change_user_name_ref, isChangeUsername, user, user_token} from "@/function/user";
import {create_request_body, request_head} from "@/request/index";
//获取头像
export const get_image = async () => {
    return new Promise((resolve, reject) => {
        wx.chooseMedia({
            count: 1,
            mediaType: ['image'],
            sourceType: ['album', 'camera'],
            maxDuration: 30,
            camera: 'back',
            success: async (res) => {
                try {
                    const tempFilePath = res.tempFiles[0].tempFilePath;
                    const fileSize = res.tempFiles[0].size;

                    console.log('选择的图片路径:', tempFilePath);
                    console.log('图片大小:', fileSize);

                    // 检查图片大小是否合理 (例如不超过5MB)
                    if (fileSize > 5 * 1024 * 1024) {
                        throw new Error('图片大小不能超过5MB');
                    }

                    resolve(tempFilePath);
                } catch (error) {
                    reject(error);
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};
//上传图片请求
export const uploadUserHeadshot = async (filePath, userUid, token) => {
    try {
        if (!filePath || !userUid || !token) {
            throw new Error('缺少必要参数');
        }
        // 直接返回上传结果
        const response = await new Promise((resolve, reject) => {
            wx.uploadFile({
                url: `${request_head}/api/user/changeUserHeadshot`,
                filePath: filePath,
                name: 'Headshot',
                formData: {
                    'userUid': userUid
                },
                header: {
                    'Authorization': `Bearer ${token}`
                },
                success(res) {
                    if (res.statusCode === 200) {
                        resolve(JSON.parse(res.data));
                    } else {
                        reject(new Error(`上传失败: ${res.data}`));
                    }
                },
                fail(err) {
                    reject(err);
                }
            });
        });
        // 更新本地存储
        user.value.data.user_headshot = response.imageUrl;
        await wx.setStorage({key: 'user', data: user.value.data});
        console.log('更新后的用户', user.value.data, '存储',  await wx.getStorage({key: 'user'}));
        // 返回响应数据供外部使用
        return response;
    } catch (error) {
        console.error('上传头像失败:', error);
        throw error;
    }
};
//图片上传
export const  handleUploadHeadshot = async () => {
    try {
        // 1. 选择图片
        const tempFilePath = await get_image();

        // 2. 上传图片到服务器
        const response = await uploadUserHeadshot(
            tempFilePath,
            user.value.data.user_uid,
            user_token.value.data
        );

        // 3. 更新本地用户头像
        user.value.data.user_headshot = response.imageUrl;

        // 4. 提示用户上传成功
        wx.showToast({
            title: '头像上传成功',
            icon: 'success'
        });
    } catch (error) {
        console.error('头像上传失败:', error);
        wx.showToast({
            title: '头像上传失败: ' + error.message,
            icon: 'none'
        });
    }
}
//修改名字
export const  change_user_name = async () => create_request_body (
    'POST',
    '/api/user/changeUserName',
    {userName: change_user_name_ref.value , userUid: user.value.data.user_uid},
    user_token.value.data,
    ).then(async res => {
        console.log(res);
    // 更新本地存储
    user.value.data.user_name = res.userName;
    await wx.setStorage({key: 'user', data: user.value.data});
    console.log('更新后的用户', user.value.data, '存储',  await wx.getStorage({key: 'user'}));
    isChangeUsername.value = false
    wx.showToast({
        title: '更改昵称成功',
        icon: 'success'
    });
}).catch(err => {
    console.error(err);
})
//收货地址
//我的收藏
//搜索商品