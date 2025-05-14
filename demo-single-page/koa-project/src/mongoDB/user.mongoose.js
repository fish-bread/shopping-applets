const mongoose = require('mongoose')
const { Schema } = mongoose
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/demo_users',{
});
db.on('connected', (err) => {
    if(err) {
        console.log('users数据库连接失败'+err);
    }
    else {
        console.log('连接users数据库成功')
    }
});
const UserSchema = new Schema({
    user_name: String,
    user_email: String, 
    user_uid: { type:Number, unique: true, required: true },
    user_headshot: {type: String, default: '/userHeadshot/2.jpg'},
    user_collection: [{
        user_collection_uid:{ type:Number, default:0},
    }],
    user_historical_record: [{
        user_historical_record: { type: Number, default:0},
    }],
    user_address: [{
        user_address_user_name: { type: String},
        user_address_user_phone: { type: Number},
        user_address_user_address: { type: String},
        user_address_user_detailed_address: { type: String},
    }],
})
const userModel = db.model('user', UserSchema, 'user')
module.exports = userModel;