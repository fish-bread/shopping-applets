const mongoose = require('mongoose')
const { Schema } = mongoose
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/demo_users',{
});
db.on('connected', (err) => {
    if(err) {
        console.log('users数据库连接失败'+err);
    }
    else {
        console.log('连接users_orders数据库成功')
    }
});
const UserSchema = new Schema({
    user_orders_uid: {type: Number, unique: true, required: true},
    user_uid: { type:Number }, 
    merchant_uid: { type: Number, },
    user_goods: {
        user_goods_uid: {type: Number,},
        user_goods_num: {type: Number},
        user_goods_price: {type: Number,},
        user_goods_name: {type: String, },
        user_goods_img: {type: String, },
    },
    user_orders_price: {type: Number },
    user_orders_status: {type: String },
    user_orders_address:{type: String },
   
})
const userModel = db.model('user_orders', UserSchema, 'user_orders')
module.exports = userModel;