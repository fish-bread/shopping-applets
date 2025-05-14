const mongoose = require('mongoose')
const { Schema } = mongoose
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/demo_users_orders',{
});
db.on('connected', (err) => {
    if(err) {
        console.log('users数据库连接失败'+err);
    }
    else {
        console.log('连接goods数据库成功')
    }
});
const UserSchema = new Schema({
    merchant_uid: { type: Number, required: true ,unique: true },
    goods:[{
        goods_uid: {type: Number,},
        goods_name: {type: String,},
        goods_img: {type: String,  default: '/userHeadshot/2.jpg'},
        goods_price: {type: Number, },
        goods_inventory: {type: Number },
    }]
})
const userModel = db.model('goods', UserSchema, 'goods')
module.exports = userModel;