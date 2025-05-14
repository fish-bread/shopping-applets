<template>
  <view class="change-user-name-page">
    <view class="change-user-name">
      <view class="change-user-name-title">您确认成为商家吗</view>
      <view class="change-user-name-button-list">
        <button @click="isCheckMerchant  = false">取消</button>
        <button @click="changeMerchant">确定</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { isCheckMerchant } from "@/function/merchant";
import {login_merchant_login} from "@/request/merchant";
const changeMerchant = () => {
  isCheckMerchant .value = false;
  login_merchant_login()
}
</script>


<style scoped>
.change-user-name-page {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(172, 172, 172, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.change-user-name {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 15%;
  position: fixed;
  border-radius: 15px;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
}
.change-user-name-title {
  font-size: 20px;
}
input {
  background-color: #f7f7f7;
  height: 30%;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
}
.change-user-name-button-list {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
