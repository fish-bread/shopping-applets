const userModel = require('../mongoDB/user_oders.mongoose.js')
const { searchGoods } = require('../service/goods.service.js') 
class UserOrdersService {
    // 获取当前最大UID
    async getMaxUid() {
        const result = await userModel
            .findOne()
            .sort({ user_orders_uid: -1 }) // 按UID降序排列
            .select('merchant_uid')    // 只选择UID字段
            .lean();                   // 返回普通JS对象而非Mongoose文档

        return result ? result.user_orders_uid: 100000000000000 - 1; // 如果没有记录，从10000000-1开始
    }
    //创建订单
    async createUserOrder(user_uid, merchant_uid, goods_uid, num, price, address) {
        const user_orders_uid_new = this.getMaxUid()
        const goods = await searchGoods(merchant_uid, goods_uid)
        const all_price = num * price
        await userModel.create({
            user_orders_uid: user_orders_uid_new,
            merchant_uid: merchant_uid,
            user_uid: user_uid,
            user_goods: {
                user_goods_uid: goods_uid,
                user_goods_num: num,
                user_goods_price: price,
                user_goods_name: goods.goods_name,
                user_goods_img: goods.goods_img,
            },
            user_orders_price: all_price,
            user_orders_status: '请支付',
            user_orders_address: address,
        })
    }
} 
module.exports = new UserOrdersService;