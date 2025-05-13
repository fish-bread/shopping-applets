<template>
  <other-head-index></other-head-index>
  <!--添加地址-->
  <view class="content">
    <!--地址详情-->
    <view class="content-body">
      <view class="content-body-new-address">
        <!--收获人-->
        <view class="content-body-user-text">
          <text>收货人</text>
          <input ></input>
        </view>
        <!--联系电话-->
        <view class="content-body-user-text">
          <text>联系电话</text>
          <input type="num"></input>
        </view>
        <!--所在地区-->
        <view class="content-body-user-text">
          <text>所在地区</text>
          <input type="num" value="四川成都"></input>
        </view>
        <!--详细地址-->
        <view class="content-body-user-textarea">
          <text>详细地址</text>
          <textarea></textarea>
        </view>
      </view>
    </view>
    <!--确认地址-->
    <!--添加地址-->
    <view class="content-bottom">
      <button class="content-bottom-button">
        <text>确认添加</text>
      </button>
    </view>
  </view>
</template>

<script setup>

import OtherHeadIndex from "@/component/headComponents/otherHeadIndex.vue";
</script>



<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
.content-bottom {
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
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
.content-body-new-address {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 5px 5px 5px 5px;
  gap: 5px;
  border-radius: 15px;
}
.content-body-user-text {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  height: 20%;
  gap: 10px;
  justify-content: space-between;
}
.content-body-user-textarea {
  height: 0;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.content-body-user-text text ,.content-body-user-textarea text {
  font-size: 15px;
  width: 20%;
}
.content-body-user-text input {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
}
.content-body-user-textarea textarea {
  font-size: 15px;
  flex: 1;
}
</style>
