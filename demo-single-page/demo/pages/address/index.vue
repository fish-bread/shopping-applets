<template>
  <!--查看地址-->
  <view class="content">
    <other-head-index></other-head-index>
    <!--地址详情-->
    <view class="content-body">
        <!--地址盒子-->
        <view v-for="(item, index) in address" :key="index" class="content-body-address">
          <!--姓名与手机号-->
          <view class="content-body-address-top">
            <text>{{ item.user_name }}</text>
            <text>{{ item.user_phone }}</text>
          </view>
          <!--详细地址-->
          <view class="content-body-address-body">
            <text>{{ item.user_address }}</text>
          </view>
          <!--其余功能-->
          <view class="content-body-address-bottom">
            <!--设为默认地址-->
            <view class="content-body-address-bottom-default-address">
              <button class="content-body-address-bottom-default-address-button">
                <image src="/static/logo.png"></image>
              </button>
              <text>设为默认</text>
            </view>
            <!--删除与修改-->
            <view class="content-body-address-bottom-set">
              <button class="content-body-address-bottom-set-button">
                <text>删除</text>
              </button>
              <button class="content-body-address-bottom-set-button">
                <text>修改</text>
              </button>
            </view>
          </view>
        </view>
    </view>
    <!--添加地址-->
    <view class="content-bottom">
      <button @click="router_address()" class="content-bottom-button">
      <text>添加地址</text>
      </button>
    </view>
  </view>
</template>

<script setup>
import { address } from "@/function/address";
import {router_address} from "@/router";
import OtherHeadIndex from "@/component/headComponents/otherHeadIndex.vue";
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.content-body {
  height: 0;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f7f7f7;
}
.content-body-address {
  width: 100%;
  height: 17%;
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px 5px 5px 5px;
  justify-content: space-between;
  background-color: #fff;
}
.content-body-address-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 18px;
}
.content-body-address-body {
  font-size: 15px;
  text-overflow:ellipsis;
  max-height: 47%;
  min-height: 47%;
  overflow: hidden;
}
.content-body-address-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 0;
  justify-content: space-between;
}
.content-body-address-bottom-default-address {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 100%;
  font-size: 16px;
}
.content-body-address-bottom-default-address-button {
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-body-address-bottom-default-address-button image {
  width: 25px;
  height: 25px;
}
.content-body-address-bottom-default-address-button::after {
  display: none;
}
.content-body-address-bottom-set {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 100%;
}
.content-body-address-bottom-set-button {
  all: unset;
  box-sizing: border-box;
  background-color: #f7f7f7;
  padding: 0 5px 0 5px;
  border-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.content-body-address-bottom-set-button::after {
  display: none;
}
.content-bottom {
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-bottom-button {
  all: unset;
  background-color: #fc332c;
  box-sizing: border-box;
  width: 60%;
  height: 80%;
  border-radius: 15px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-bottom-button::after {
  display: none;
}

</style>
