const mongoose = require('mongoose')
const { Schema } = mongoose
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/demo_users',{
});
db.on('connected', (err) => {
    if(err) {
        console.log('users数据库连接失败'+err);
    }
    else {
        console.log('连接merchant数据库成功')
    }
});
const merchantSchema = new Schema({
    merchant_uid: { type: Number, required: true, unique: true },
    merchant_name: { type: String },
    merchant_headshot: { type: String },
    merchant_email: { type: String },
})
const  merchantModel = db.model('merchant', merchantSchema, 'merchant')
module.exports =  merchantModel;