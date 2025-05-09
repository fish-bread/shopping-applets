<template>
  <view class="content">
    <view class="content-top">
      <view class="content-body-search">
        <view class="content-body-search-svg">
          <image src="/static/搜索_search.svg" alt=""/>
        </view>
        <input class="content-body-search-input" placeholder="请输入搜索的关键词"></input>
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
            商品
          </text>
        </button>
        <button class="content-body-button">
          <text>
            店铺
          </text>
        </button>
      </view>
      <!--组件切换-->
      <view class="content-body-component">
        <!--无订单-->
        <view v-if="collect === false" class="content-body-component-orders-none">
          <image src="/static/logo.png"></image>
          <text>还没有收藏</text>
        </view>
        <!--有订单-->
        <view v-else class="content-body-component-orders-have">1</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const collect = ref(false) 
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
  justify-content: flex-start;
  gap: 10px;
  box-sizing: border-box;
  padding-left: 10px;
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
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
