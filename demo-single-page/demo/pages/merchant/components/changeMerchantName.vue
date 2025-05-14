<template>
  <view class="change-user-name-page">
    <view class="change-user-name" :class="{'slide-in': isChangeMerchantName}">
      <view class="change-user-name-title">输入邮箱</view>
      <input v-model="setMerchant" max="20"></input>
      <view class="change-user-name-button-list">
        <button @click="isChangeMerchantName = false">取消</button>
        <button @click="changeMerchant">确定</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import {isChangeMerchantName, login_merchant} from "@/function/merchant";
import {login_merchant_captcha} from "@/request/merchant";
const setMerchant = ref()
onMounted(()=> {
  setMerchant.value = login_merchant.value.merchant_email
})
const changeMerchant = () => {
  isChangeMerchantName.value = false;
  login_merchant.value.merchant_email = setMerchant.value
  login_merchant_captcha()
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
}
.change-user-name {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  position: fixed;
  bottom: -20%; /* 初始位置在屏幕外（底部） */
  -webkit-border-top-left-radius: 15px;
  -webkit-border-top-right-radius: 15px;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
}
.change-user-name.slide-in {
  transform: translateY(-100%); /* 滑入到最终位置 */
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
