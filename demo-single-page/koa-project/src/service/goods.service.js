const userModel = require('../mongoDB/goods.mongoose')
class GoodsService {
    // 获取当前最大UID
    async getMaxUid() {
        const result = await userModel
            .findOne()
            .sort({ user_orders_uid: -1 }) // 按UID降序排列
            .select('merchant_uid')    // 只选择UID字段
            .lean();                   // 返回普通JS对象而非Mongoose文档

        return result ? result.user_orders_uid: 2 - 1; // 如果没有记录，从10000000-1开始
    }
    //创建货物
    async createGoods(merchant_uid, goods_name, goods_price,goods_inventory ) {
        const newUid = this.getMaxUid()
        await userModel.create({
            merchant_uid: merchant_uid,
            goods:[{
                goods_uid: newUid,
                goods_name: goods_name,
                goods_price: goods_price,
                goods_inventory: goods_inventory,
            }]
        })
    }
    //搜索货物
    async searchGoods(merchant_uid, goods_uid) {
        // 返回普通JS对象而非Mongoose文档
        const result = userModel.findOne(
            {
                merchant_uid: merchant_uid,
                'goods.goods_uid': goods_uid
            },
            {
                'goods.$': 1  // 只返回匹配的goods数组元素
            }
        ).lean();
        console.log('查询的货物',result.goods[0])
        return result ? result.goods[0] : null;
    }
}
module.exports = new GoodsService()