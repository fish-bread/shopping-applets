<template>
  <view class="content-components">
    <view class="content-components-body">
      <!--主体-->
      <view class="content-components-body-subject">
        <!--滚动盒子-->
        <view class="scroll-box">
          <!--顶部编辑切换-->
          <view class="content-body-subject-top">
            <view class="content-body-subject-subject-title">购物车</view>
            <text>编辑</text>
          </view>
          <!--购物车有-->
          <view v-if="isGoods === true" class="content-body-subject-sopping-cart">
            <!--单个店铺的订单-->
            <view v-for="(item,index) in goods" :key="index" class="content-body-subject-sopping-cart-shop">
              <view class="content-body-subject-sopping-cart-shop-name">
                <view class="content-body-subject-sopping-cart-shop-name-svg">
                  <image src="/static/logo.png"/>
                </view>
                <text>{{ item.store_name }}</text>
              </view>
              <view v-for="(good, index) in item.goods" :key="index" class="content-body-subject-sopping-cart-shop-goods">
                <view class="content-body-subject-sopping-cart-shop-goods-svg">
                  <image src="/static/logo.png"/>
                </view>
                <!--商品图片-->
                <view class="content-body-subject-sopping-cart-shop-goods-img">
                  <image :src="good.goods_img"/>
                </view>
                <!--价格及商品名-->
                <view class="content-body-subject-sopping-cart-shop-goods-name">
                  <text style=" font-size: 16px;">货物</text>
                  <text style="color: #999999; font-size: 14px;">已售{{ good.goods_sold }}件</text>
                  <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;{{ good.goods_price }}</text>
                </view>
                <!--加购-->
                <view class="content-body-subject-sopping-cart-shop-goods-add-ons">
                  <text style=" font-size: 18px;">{{ good.goods_num }}</text>
                  <image src="/static/logo.png"/>
                </view>
              </view>
            </view>
          </view>
          <!--购物车空-->
          <view v-else class="content-body-subject-sopping-cart-none">
            <view class="content-body-subject-sopping-cart-none-svg">
              <image src="/static/logo.png"></image>
            </view>
            <text>购物车还是空的哦</text>
          </view>
          <!--底部推荐-->
          <view class="content-body-subject-like">
            <!--标题-->
            <view class="content-body-subject-like-title">
              <text>你可能还喜欢</text>
            </view>
            <!--商品-->
            <view class="content-body-subject-like-goods-list">
              <view class="content-body-subject-like-goods">
                <image src="/static/logo.png"></image>
                <view class="content-body-subject-like-shopping">
                  <view class="content-body-subject-like-shopping-left">
                    <text style=" font-size: 16px;">货物</text>
                    <text style="color: #999999; font-size: 14px;">已售1件</text>
                    <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                  </view>
                  <view class="content-body-subject-like-shopping-right">
                    <image src="/static/logo.png"></image>
                  </view>
                </view>
              </view>
              <view class="content-body-subject-like-goods">
                <image src="/static/logo.png"></image>
                <view class="content-body-subject-like-shopping">
                  <view class="content-body-subject-like-shopping-left">
                    <text style=" font-size: 16px;">货物</text>
                    <text style="color: #999999; font-size: 14px;">已售1件</text>
                    <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                  </view>
                  <view class="content-body-subject-like-shopping-right">
                    <image src="/static/logo.png"></image>
                  </view>
                </view>
              </view>
              <view class="content-body-subject-like-goods">
                <image src="/static/logo.png"></image>
                <view class="content-body-subject-like-shopping">
                  <view class="content-body-subject-like-shopping-left">
                    <text style=" font-size: 16px;">货物</text>
                    <text style="color: #999999; font-size: 14px;">已售1件</text>
                    <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                  </view>
                  <view class="content-body-subject-like-shopping-right">
                    <image src="/static/logo.png"></image>
                  </view>
                </view>
              </view>
              <view class="content-body-subject-like-goods">
                <image src="/static/logo.png"></image>
                <view class="content-body-subject-like-shopping">
                  <view class="content-body-subject-like-shopping-left">
                    <text style=" font-size: 16px;">货物</text>
                    <text style="color: #999999; font-size: 14px;">已售1件</text>
                    <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                  </view>
                  <view class="content-body-subject-like-shopping-right">
                    <image src="/static/logo.png"></image>
                  </view>
                </view>
              </view>
              <view class="content-body-subject-like-goods">
                <image src="/static/logo.png"></image>
                <view class="content-body-subject-like-shopping">
                  <view class="content-body-subject-like-shopping-left">
                    <text style=" font-size: 16px;">货物</text>
                    <text style="color: #999999; font-size: 14px;">已售1件</text>
                    <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                  </view>
                  <view class="content-body-subject-like-shopping-right">
                    <image src="/static/logo.png"></image>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!--确认购买-->
      <view class="content-body-shopping-payment">
        <view class="content-body-shopping-payment-select-all">
          <view class="content-body-shopping-payment-select-all-button-outside">
            <button class="content-body-shopping-payment-select-all-button">
              <image src="/static/logo.png" ></image>
            </button>
          </view>
          全选
        </view>
        <view class="content-body-shopping-payment-price">总计:&nbsp;&yen0.00</view>
        <button class="content-body-shopping-payment-pay-button">去结算</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import {goods} from "@/function/shoppingCar";
const isGoods = ref(true)

</script>


<style scoped>
.content-components {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.content-components-body {
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
.content-body-shopping-payment {
  position: fixed;
  height: 6%;
  z-index: 1;
  width: 100%;
  top: 86%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  justify-content: space-between;
  align-items: center;
}
.content-body-shopping-payment-select-all {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}
.content-body-shopping-payment-select-all-button {
  all: unset;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
}
.content-body-shopping-payment-select-all-button-outside {
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  margin-right: 3px;
}
.content-body-shopping-payment-select-all-button::after {
  display: none;
}
.content-body-shopping-payment-select-all-button image {
  width: 100%;
  height: 100%;
}
.content-body-shopping-payment-pay-button {
  all: unset;
  background-color: grey;
  border-radius: 30px;
  height: 100%;
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  color: #fff;
}
.content-body-shopping-payment-pay-button::after {
  display: none;
}
.content-body-shopping-payment-price {
  color: red;
  margin-right: 10%;
  font-size: 18px;
}
.content-components-body-subject {
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  overflow-y: auto;
  overflow-x: hidden;
}
.content-body-subject-top {
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  position: relative;
  background-color: white;
}
.content-body-subject-top::before {
  content: '';
  position: absolute;
  z-index: 1;
  background-color: #dedede;
  height: 1px;
  width: 100%;
  top: 33px; 
}
.content-body-subject-sopping-cart {
  width: 100%;
  height: auto;
  flex: 1;
  min-height: 40%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 5px;
  background-color: white;
}
.content-body-subject-sopping-cart-shop {
  width: 100%;
  box-sizing: border-box;
}
.content-body-subject-sopping-cart-shop-name {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  position: relative;
  font-size: 17px;
}
.content-body-subject-sopping-cart-shop-name::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
  top: 39px;
}
.content-body-subject-sopping-cart-shop-name-svg {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 10px;
  margin-left: 10px;
}
.content-body-subject-sopping-cart-shop-name-svg image {
  width: 100%;
  height: 100%;
}
.content-body-subject-sopping-cart-shop-goods-svg {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 10px;
}
.content-body-subject-sopping-cart-shop-goods-svg image {
  width: 100%;
  height: 100%;
}
.content-body-subject-sopping-cart-shop-goods {
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;
}
.content-body-subject-sopping-cart-shop-goods::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
  top: 119px;
}
.content-body-subject-sopping-cart-shop-goods-img {
  width: 85px;
  height: 85px;
}
.content-body-subject-sopping-cart-shop-goods-img image {
  width: 100%;
  height: 100%;
}
.content-body-subject-sopping-cart-shop-goods-name {
  display: flex;
  flex-direction: column;
  height: 85px;
  justify-content: space-between;
}
.content-body-subject-sopping-cart-shop-goods-add-ons {
  width: 100%;
  height: 85px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  margin-right: 10px;
}
.content-body-subject-sopping-cart-shop-goods-add-ons image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.content-body-subject-sopping-cart-none {
  width: 100%;
  height: 0;
  min-height: 40%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 10px;
}
.content-body-subject-sopping-cart-none text {
  color: #989898;
}
.content-body-subject-sopping-cart-none-svg {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  border-radius: 50%;
}
.content-body-subject-sopping-cart-none-svg image {
  width: 60%;
  height: 60%;
}
.scroll-box {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
}
.content-body-subject-like {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  background-color: #f7f7f7;
}
.content-body-subject-like-title {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.content-body-subject-like-goods-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
.content-body-subject-like-goods {
  width: 48.5%;
  height: 250px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.content-body-subject-like-goods image {
  width: 100%;
  height: 60%;
}
.content-body-subject-like-shopping{
  height: 40%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 5px 0 5px;
  gap: 5px;
}
.content-body-subject-like-shopping-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content-body-subject-like-shopping-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.content-body-subject-like-shopping-right image {
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>
