<template>
  <!--设置页面-->
  <view class="content">  
    <other-head-index></other-head-index>
    <!--主体-->
    <view class="content-body">
      <!--资料-->
      <view class="content-body-user-information white">
        <view class="content-body-user-information-text padding">
          <text class="content-body-user-information-text-title">uid</text>
          <text class="content-body-user-information-text-right grey">{{ user.data.user_uid }}</text>
        </view>
        <view class="content-body-user-information-img padding">
          <text class="content-body-user-information-text-title">头像</text>
          <view @click="handleUploadHeadshot" class="content-body-user-information-text-img">
            <image :src="user.data.user_headshot"></image>
            <image class="right" src="/static/1右_right (1).svg"></image>
          </view>
        </view>
        <view  class="content-body-user-information-text padding">
          <text class="content-body-user-information-text-title">昵称</text>
          <view @click="isChangeUsername = true" class="content-body-user-information-text-right grey">
            <text>{{ user.data.user_name }}</text>
            <image src="/static/1右_right (1).svg"></image>
          </view>
        </view>
      </view>
      <!--地址-->
      <button @click="router_address_index" class="content-body-user-other padding white">
        <text class="content-body-user-information-text-title">我的地址</text>
        <view class="content-body-user-information-text-right grey">
          <image src="/static/1右_right (1).svg"></image>
        </view>
      </button>
    </view>
    <!--退出-->
    <view class="content-bottom" @click="exit_user">
      <image src="/static/退出_logout.svg"></image>
      <text>退出登录</text>
    </view>
    <!--修改名字-->
    <change-user-name v-if="isChangeUsername === true"></change-user-name>
  </view>
</template>

<script setup>
import {exit_user, isChangeUsername, user} from "@/function/user";
import {router_address_index} from "@/router";
import {handleUploadHeadshot} from "@/request/userRequest";
import ChangeUserName from "@/pages/setting/components/changeUserName.vue";
import OtherHeadIndex from "@/component/headComponents/otherHeadIndex.vue";
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.content-body {
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  background-color: #f7f7f7;
  box-sizing: border-box;
}
.content-bottom {
  height: 7%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 20px;
}
.content-bottom image {
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  margin-right: 10px;
}
.content-body-user-information {
  height: 25%;
  display: flex;
  flex-direction: column;
}
.content-body-user-other {
  height: 7%;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.content-body-user-information-img {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #2c2c2c;
  align-items: center;
  justify-content: space-between;
}
.content-body-user-information-text-img {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content-body-user-information-text-img .right {
  width: 25px;
  height: 25px;
}
.content-body-user-information-text-img image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}

.content-body-user-information-text {
  width: 100%;
  height: 30%;
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
.white { 
  width: 100%;
  background-color: white;
}
.padding {
  padding-left: 10px;
  padding-right: 10px;
}
.content-body-user-information-text-title {
  font-size: 16px;
}
.grey {
  color: #999999;
}
</style>
