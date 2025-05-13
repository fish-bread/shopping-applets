<template>
  <other-head-index></other-head-index>
  <!--订单页面-->
  <view class="content">
    <view class="content-top">
      <view class="content-body-search">
        <view class="content-body-search-svg">
          <image src="/static/搜索_search.svg" alt=""/>
        </view>
        <input class="content-body-search-input" placeholder="请输入搜索的商品"></input>
      </view>
    </view>
    <view class="content-body">
      <!--导航栏-->
      <view class="content-body-navigation">
        <button class="content-body-button">
          <text>
            全部
          </text>
        </button>
        <button class="content-body-button">
          <text>
            待付款
          </text>
        </button>
        <button class="content-body-button">
          <text>
            代发货
          </text>
        </button>
        <button class="content-body-button">
          <text>
            代收货
          </text>
        </button>
        <button class="content-body-button">
          <text>
            已完成
          </text>
        </button>
      </view>
      <!--组件切换-->
      <view class="content-body-component">
        <!--无订单-->
        <view v-if="isOrders === false" class="content-body-component-orders-none">
          <image src="/static/logo.png"></image>
          <text>还没有订单</text>
        </view>
        <!--有订单-->
        <view v-else class="content-body-component-orders-have">
          <!--单个订单对象-->
          <view v-for="(item, index) in orders" :key="index" class="content-body-component-orders">
            <!--店铺及状态-->
            <view  class="content-body-component-orders-top">
              <view class="content-body-component-orders-top-store title">{{ item.store_name }}</view>
              <view class="content-body-component-orders-top-status status">{{ item.status }}</view>
            </view>
            <view class="content-body-component-orders-body">
              <view class="content-body-component-orders-body-image">
                <image :src="item.goods.goods_img"></image>
              </view>
              <view class="content-body-component-orders-body-name title">{{ item.goods.goods_name }}</view>
              <view class="content-body-component-orders-body-num">
                <view class="content-body-component-orders-body-price">
                  &yen;{{item.goods.goods_price}}
                </view>
                <view class="content-body-component-orders-body-item">
                  共{{ item.goods.goods_num }}件
                </view>
              </view>
            </view>
            <view class="content-body-component-orders-bottom">
              <view class="content-body-component-orders-bottom-more title">更多</view>
              <view class="other">
                <view class="content-body-component-orders-bottom-other bottom-text">删除订单</view>
                <view class="content-body-component-orders-bottom-other bottom-text">再来一单</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import {orders} from "@/function/orders";
import OtherHeadIndex from "@/component/headComponents/otherHeadIndex.vue";
const isOrders = ref(true)
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content-top {
  width: 100%;
  height: 6%;
  background-color: #f0eff3;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content-body {
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content-body-search {
  background-color: #ffffff;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60%;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 10px;
}
.content-body-search-svg {
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-body-search-svg image {
  width: 20px;
  height: 20px;
}
.content-body-search-input {
  height: 100%;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  padding-right: 10px;
}
.content-body-navigation {
  height: 7%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.content-body-button {
  all: unset;
  height: 100%;
  width: 12%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-body-button text {
  box-sizing: border-box;
  font-size: 13px;
  color: #dd524d;
  height: 100%;
  border-bottom: 2px solid #dd524d;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-body-button::after {
  display: none;
}
.content-body-component {
  height: 0;
  flex: 1;
}
.content-body-component-orders-none {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20%;
}
.content-body-component-orders-none image {
   width: 100px;
   height: 100px;
 }
.content-body-component-orders-none text {
  color: #9b9b9b;
  font-size: 14px;
}
.content-body-component-orders-have {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 10px;
  padding: 10px;
  background-color: #f7f7f7;
}
.content-body-component-orders {
  background-color: #ffffff;
  width: 100%;
  height: 20%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  gap: 5px;
  display: flex;
  flex-direction: column;
}
.content-body-component-orders-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20%;
  justify-content: space-between;
}
.content-body-component-orders-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  max-height: 55%;
  gap: 10px;
  justify-content: space-between;
}
.content-body-component-orders-body-name {
  flex: 1;
  height: 80%;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow:ellipsis;
}
.content-body-component-orders-body-image {
  width: 70px;
  height: 70px;
}
.content-body-component-orders-body-image image {
  width: 100%;
  height: 100%;
}
.content-body-component-orders-body-num {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}
.content-body-component-orders-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25%;
  justify-content: space-between;
}
.content-body-component-orders-bottom-other, .content-body-component-orders-bottom-more {
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  border-radius: 5px;
  background-color: #e2e2e2;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.title {
  font-size: 17px;
}
.bottom-text {
  font-size: 13px;
}
.status {
  font-size: 13px;
  color: #a5a5a5;
}
.other {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
