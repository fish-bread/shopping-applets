// routes.js
import { guardedNavigateTo, guardedReLaunch, guardedRedirectTo } from '@/router/routeguard';

export const router_login = () => wx.navigateTo({url: '/pages/login/index',});
export const router_search = () => wx.navigateTo({url:'/pages/search/index'});
export const router_home = () => wx.navigateTo({url:'/pages/home/index'});
// 其他路由都使用封装后的函数
export const router_address = (title = '添加地址') => guardedNavigateTo('/pages/address/address', title);
export const router_address_index = (title = '收货地址') => guardedNavigateTo('/pages/address/index', title);
export const router_collect = (title = '我的收藏') => guardedNavigateTo('/pages/collect/index', title);
export const router_footprints = (title = '历史记录') => guardedNavigateTo('/pages/footprints/index', title);
export const router_setting = (title = '个人资料') => guardedNavigateTo('/pages/setting/index', title);
export const router_orders = (title = '我的订单') => guardedNavigateTo('/pages/orders/index', title);
export const router_merchant = (title = '成为商家') => guardedNavigateTo('/pages/merchant/index', title);
//routerBack
export const router_back = () => {
    wx.navigateBack({
        delta: 1,
    })
}