export const request_head = 'http://localhost:3000'
//登录请求
export const login_request_body = (method, url , data)=> {
    console.log('请求',method, url , data)
    return new Promise((resolve, reject) => {
        wx.request({
            method: method,
            url: request_head + url,
            data: data,
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}
//数据请求
export const create_request_body = (method, url , data, headers)=> {
    console.log('请求',method, url , data)
    return new Promise((resolve, reject) => {
        wx.request({
            method: method,
            url: request_head + url,
            data: data,
            header: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${headers}`
            },
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}
//上传请求
export const update_request_body = ( url , filePath , formData, headers)=> {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: request_head + url,
            filePath: filePath,
            name: 'Headshot',
            formData: formData,
            header: {
                'Authorization': `Bearer ${headers}`
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
    })
}