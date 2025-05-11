<template>
  <!--设置页面-->
  <view class="content">
    <!--主体-->
    <view class="content-body">
      <!--资料-->
      <view class="content-body-user-information white">
        <view class="content-body-user-information-text padding">
          <text class="content-body-user-information-text-title">标题</text>
          <text class="content-body-user-information-text-right grey">1111111</text>
        </view>
        <view class="content-body-user-information-img padding">
          <text class="content-body-user-information-text-title">标题</text>
          <view class="content-body-user-information-text-img">
            <image src="/static/logo.png" ></image>
          </view>
        </view>
        <view class="content-body-user-information-text padding">
          <text class="content-body-user-information-text-title">标题</text>
          <view class="content-body-user-information-text-right grey">
            <text>1111111</text>
            <image src="/static/1右_right (1).svg"></image>
          </view>
        </view>
        <view class="content-body-user-information-text padding">
          <text class="content-body-user-information-text-title">标题</text>
          <view class="content-body-user-information-text-right grey">
            <text>1111111</text>
            <image src="/static/1右_right (1).svg"></image>
          </view>
        </view>
        <view class="content-body-user-information-text padding">
          <text class="content-body-user-information-text-title">标题</text>
          <view class="content-body-user-information-text-right grey">
            <text>1111111</text>
            <image src="/static/1右_right (1).svg"></image>
          </view>
        </view>
      </view>
      <!--日期-->
      <view class="content-body-user-other padding white">
        <text class="content-body-user-information-text-title">标题</text>
        <view class="content-body-user-information-text-right grey">
          <text>1111111</text>
          <image src="/static/1右_right (1).svg"></image>
        </view>
      </view>
      <!--地址-->
      <view class="content-body-user-other padding white">
        <text class="content-body-user-information-text-title">标题</text>
        <view class="content-body-user-information-text-right grey">
          <text>1111111</text>
          <image src="/static/1右_right (1).svg"></image>
        </view>
      </view>
      <!--手机号-->
      <view class="content-body-user-other padding white">
        <text class="content-body-user-information-text-title">标题</text>
        <view class="content-body-user-information-text-right grey">
          <text>1111111</text>
          <image src="/static/1右_right (1).svg"></image>
        </view>
      </view>
    </view>
    <!--退出-->
    <view class="content-bottom">
      <image src="/static/退出_logout.svg"></image>
      <text>退出登录</text>
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
  overflow: hidden;
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
  height: 40%;
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
  height: 30%;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #2c2c2c;
  align-items: center;
  justify-content: space-between;
}
.content-body-user-information-text-img {
  width: 53px;
  height: 53px;
  overflow: hidden;
  border-radius: 50%;
}
.content-body-user-information-text-img image {
  width: 100%;
  height: 100%;
}
.content-body-user-information-text {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #2c2c2c;
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
