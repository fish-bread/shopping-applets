<template>
  <view class="merchant-body">
    <other-head-index></other-head-index>
    <view class="merchant-body-body">
      <!--邮箱-->
      <view  class="content-body-user-information-text padding">
        <text class="content-body-user-information-text-title">邮箱</text>
        <view @click="isChangeMerchantName = true" class="content-body-user-information-text-right grey">
          <text>{{ login_merchant.merchant_email }}</text>
          <image src="/static/1右_right (1).svg"></image>
        </view>
      </view>
      <!--验证码-->
      <view  class="content-body-user-information-text padding">
        <text class="content-body-user-information-text-title">验证码</text>
        <view @click="isChangeMerchantCaptcha = true" class="content-body-user-information-text-right grey">
          <text>{{ login_merchant.merchant_captcha }}</text>
          <image src="/static/1右_right (1).svg"></image>
        </view>
      </view>
    </view>
    <view @click="isCheckMerchant = true" class="merchant-body-bottom">
      注册商家
    </view>
    <change-merchant-name v-if="isChangeMerchantName === true"></change-merchant-name>
    <change-merchant-captcha v-if="isChangeMerchantCaptcha === true"></change-merchant-captcha>
    <check-merchant  v-if="isCheckMerchant === true"></check-merchant>
  </view>
</template>

<script setup>
import OtherHeadIndex from "@/component/headComponents/otherHeadIndex.vue";
import {isChangeMerchantCaptcha, isChangeMerchantName, isCheckMerchant, login_merchant} from "@/function/merchant";
import ChangeMerchantName from "@/pages/merchant/components/changeMerchantName.vue";
import CheckMerchant from "@/pages/merchant/components/checkMerchant.vue";
import ChangeMerchantCaptcha from "@/pages/merchant/components/changeMerchantCaptcha.vue";
</script>


<style scoped>
.merchant-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;background-color: #dd524d;
  position: relative;
}
.merchant-body-body {
  flex: 1;
  background-color: #f7f7f7;
  overflow-y: auto;
  overflow-x: hidden;
}
.merchant-body-bottom {
  height: 7%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 20px;
}
.content-body-user-information-text {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #2e2e2e;
  align-items: center;
  justify-content: space-between;
}
.content-body-user-information-text-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content-body-user-information-text-right image {
  width: 25px;
  height: 25px;
}
.padding {
  padding-left: 10px;
  padding-right: 10px;
}
.content-body-user-information-text-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content-body-user-information-text-right image {
  width: 25px;
  height: 25px;
}
</style>
