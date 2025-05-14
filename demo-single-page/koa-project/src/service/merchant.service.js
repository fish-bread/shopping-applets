const merchantModel = require('../mongoDB/merchant.mongoose.js')
class MerchantService {
    // 获取当前最大UID
    async getMaxUid() {
        const result = await merchantModel
            .findOne()
            .sort({ merchant_uid: -1 }) // 按UID降序排列
            .select('merchant_uid')    // 只选择UID字段
            .lean();                   // 返回普通JS对象而非Mongoose文档
        console.log('最大uid',result)
        return result ? result.merchant_uid : 10000000 - 1; // 如果没有记录，从10000000-1开始
    }
    //创建商家
    async createMerchant (merchant_email) {
        console.log('执行')
        // 获取当前最大UID
        const maxUid = await this.getMaxUid();
        console.log('最大uid',maxUid);
        // 计算新UID (确保不超过8位最大值)
        let newUid = maxUid + 1;
        if (newUid > 99999999) {
            throw new Error('已达到最大商家UID数量限制');
        }
        const name = `用户${newUid}`;
        const head_shot = '/userHeadshot/2.jpg'
        console.log('执行2')
        try {
            await merchantModel.create({
                merchant_email: merchant_email,
                merchant_name: name,
                merchant_uid: newUid,
                merchant_headshot: head_shot,
            }, {});
        } catch (error) {
            console.error('创建用户失败:', error);
        }
    }
    //邮箱搜索
    async searchMerchant(merchant_email) {
        const merchant = await  merchantModel.findOne({ merchant_email: merchant_email },{},{})
        if (merchant) {
            const { merchant_uid,merchant_name,merchant_headshot } = merchant;
            return { merchant_uid, merchant_name,merchant_headshot};  
        }
        else {
            return undefined
        }
    }
    //uid搜索
    async searchUidMerchant (merchant_uid) {
        
    }
}
module.exports = new MerchantService;