<template>
  <view class="content">
    <view class="content-body">
      <!--用户头像及背景-->
      <view class="content-body-top">
        <view class="content-body-top-user">
          <view class="content-body-top-user-image">
            <image src="/static/logo.png"></image>
          </view>
          <view class="content-body-top-user-name">用户00000000000000000000000000007</view>
          <navigator url="/pages/setting/index" open-type="navigate" class="content-body-top-user-setting">
            <image src="/static/设置_setting.svg" alt=""></image>
          </navigator>
        </view>
        <view class="content-body-top-other">
          <view class="content-body-top-other-collection">
            <view style="font-size: 25px; color: #fff">1</view>
            <view class="content-body-top-other-collection-title">
              <view class="content-body-top-other-collection-svg">
                <image src="/static/星星_star.svg"></image>
              </view>
              我的收藏
            </view>
            <view class="content-body-top-other-collection-liner"></view>
          </view>
          <view class="content-body-top-other-collection">
            <view style="font-size: 25px; color: #fff">2</view>
            <view class="content-body-top-other-collection-title">
              <view class="content-body-top-other-collection-svg">
                <image src="/static/足迹.svg"></image>
              </view>
              我的足迹
            </view>
          </view>
        </view>
      </view>
      <!--主体-->
      <view class="content-body-subject">
        <!--订单-->
        <view class="content-body-subject-orders">
          <view class="content-body-subject-orders-top">
            <view style="font-size: 17px">我的订单</view>
            <button style=" all: unset;color: #999999;font-size: 13px;display: flex; align-items: center">查看更多<image style="width: 15px; height: 15px;" src="/static/1右_right.svg"></image></button>
          </view>
          <view class="content-body-subject-orders-body">
            <view class="content-body-subject-orders-status">
              <image src="/static/logo.png"></image>
              <view>代付款</view>
            </view>
            <view class="content-body-subject-orders-status">
              <image src="/static/logo.png"></image>
              <view>代发货</view>
            </view>
            <view class="content-body-subject-orders-status">
              <image src="/static/logo.png"></image>
              <view>代收货</view>
            </view>
            <view class="content-body-subject-orders-status">
              <image src="/static/logo.png"></image>
              <view>已完成</view>
            </view>
            <view class="content-body-subject-orders-status">
              <image src="/static/logo.png"></image>
              <view>售后</view>
            </view>
          </view>
        </view>
        <!--优惠-->
        <view class="content-body-subject-preferential-list">
          <view class="content-body-subject-preferential">
            <view class="content-body-subject-preferential-title">积分</view>
            <view class="content-body-subject-preferential-num">1</view>
          </view>
          <view class="content-body-subject-preferential">
            <view class="content-body-subject-preferential-title">余额</view>
            <view class="content-body-subject-preferential-num">2</view>
          </view>
          <view class="content-body-subject-preferential">
            <view class="content-body-subject-preferential-title">优惠券</view>
            <view class="content-body-subject-preferential-num">3</view>
          </view>
          <view class="content-body-subject-preferential">
            <view class="content-body-subject-preferential-title">卡券</view>
            <view class="content-body-subject-preferential-num">4</view>
          </view>
        </view>
        <!--其余-->
        <view class="content-body-subject-function-list">
          <view class="content-body-subject-function">
            <image src="/static/logo.png"></image>
            <view class="content-body-subject-function-title">我的收藏</view>
          </view>
          <view class="content-body-subject-function">
            <image src="/static/logo.png"></image>
            <view class="content-body-subject-function-title">收货地址</view>
          </view>
          <view class="content-body-subject-function">
            <image src="/static/logo.png"></image>
            <view class="content-body-subject-function-title">绑定手机号</view>
          </view>
          <view class="content-body-subject-function">
            <image src="/static/logo.png"></image>
            <view class="content-body-subject-function-title">个人资料</view>
          </view>
          <view class="content-body-subject-function">
            <image src="/static/logo.png"></image>
            <view class="content-body-subject-function-title">清除缓存</view>
          </view>
          <view class="content-body-subject-function">
            <image src="/static/logo.png"></image>
            <view class="content-body-subject-function-title">客服</view>
          </view>
        </view>
      </view>
    </view>
    <!--导航栏-->
    <view class="content-bottom">
      <navigator url="/pages/home/index" class="content-button"  open-type="navigate">
        <image src="/static/首页_home.svg"></image>
        首页
      </navigator>
      <navigator url="/pages/classify/index" class="content-button" open-type="navigate">
        <image src="/static/瀑布流横向_waterfalls-h.svg"></image>
        分类
      </navigator>
      <navigator url="/pages/shopping_cart/index" class="content-button" open-type="navigate">
        <image src="/static/购物车_shopping.svg"></image>
        购物车
      </navigator>
      <navigator url="/pages/user/index"  class="content-button" style="color: #ff4544" open-type="navigate">
        <image src="/static/人员_people_red.svg"></image>
        我的
      </navigator>
    </view>
  </view>
</template>

<script setup>

</script>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content-body {
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content-bottom {
  width: 100%;
  min-height: 50px;
  height: 8%;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 -1px 10px rgba(198,198,198,0.5)
}
.content-button {
  all: unset;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  flex-direction: column;
  font-size: 10px;
}
.content-button .navigator-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content-button::after {
  display: none;
}
.content-button image {
  box-sizing: border-box;
  margin-bottom: 5px;
  width: 25px;
  height: 25px;
}
.content-body-top {
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 28%;
  justify-content: space-between;
  background-color: #fe4543;
}
.content-body-top-user {
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
}
.content-body-top-user-image {
  box-sizing: border-box;
  border-radius: 50%;
  overflow: hidden;
  height: 55px;
  width: 55px;
}
.content-body-top-user-image image {
  height: 100%;
  width: 100%;
}
.content-body-top-user-name {
  font-size: 20px;
  box-sizing: border-box;
  padding-left: 10px;
  margin-right: 10px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  color: white;
}
.content-body-top-user-setting {
  display: flex;
  flex-direction: row;
  width: 9%;
  margin-right: 3px;
  height: 40%;
  align-items: center;
  justify-content: center;
}
.content-body-top-user-setting image {
  height: 25px;
  width: 25px;
}
.content-body-top-other {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.content-body-top-other-collection {
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.content-body-top-other-collection-liner {
  position: absolute;
  background-color: #2c2c2c;
  width: 1px;
  height: 50%;
  left: 155px;
}
.content-body-top-other-collection-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
}
.content-body-top-other-collection-svg {
  height: 20px;
  width: 20px;
}
.content-body-top-other-collection-svg image {
  height: 100%;
  width: 100%;
}
.content-body-subject {
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px 0 10px; 
  gap: 10px;
}
.content-body-subject-orders {
  box-sizing: border-box;
  width: 100%;
  height: 18%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
  justify-content: space-between;
}
.content-body-subject-orders-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.content-body-subject-orders-top button:after {
  display: none;
}
.content-body-subject-orders-body {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.content-body-subject-orders-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #999999;
}
.content-body-subject-orders-status image {
  height: 30px;
  width: 30px;
}
.content-body-subject-preferential-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 26%;
  flex-wrap: wrap;
  gap: 10px;
}
.content-body-subject-preferential {
  width: 48%;
  height: 46%;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-direction: column;
}
.content-body-subject-preferential-title {
  color: #999999;
  font-size: 14px;
}
.content-body-subject-preferential-num {
  font-size: 20px;
  font-weight: bold;
}
.content-body-subject-function-list {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}
.content-body-subject-function {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 25%;
  font-size: 13px;
}
.content-body-subject-function image {
  width: 40px;
  height: 40px;
}
</style>
