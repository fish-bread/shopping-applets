<template>
  <view class="header" :style="{ height: navBarHeight + 'px',color: navBarColor }">
    <!--状态栏背景-->
    <view class="header-top" :style="{ height: statusBarHeight + 'px' }"></view>
    <!--导航栏内容区域-->
    <view class="header-content" :style="{ height: titleBarHeight + 'px', backgroundColor: navBarBackColor  }" >
      <!--首页-->
      <view v-show="status === 0" class="header-content-title">demo</view>
      <!--搜索-->
      <button v-show="status === 1" @click="router_search('搜索')" class="content-body-search">
        <view class="content-body-search-svg">
          <image src="/static/搜索_search.svg" alt=""/>
        </view>
        <input class="content-body-search-input" placeholder="请输入搜索的商品"></input>
      </button>
      <!--购物车-->
      <view v-show="status === 2" class="header-content-title-center">
        <text>购物车</text>
      </view>
      <!--用户-->
      <view v-show="status === 3" class="header-content-title-center">
        <text>我的</text>
      </view>
      <!--登录-->
      <view v-show="status === 4" class="header-content-title-center">
        <text>登录</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted,watchEffect } from 'vue'
import {navBarBackColor, navBarColor, navBarHeight, statusBarHeight, titleBarHeight} from "@/function/navBar";
import {router_search} from "@/router";
import {status} from "@/function/componentStatus";
onMounted(() => {
  // 获取窗口信息（新API）
  const windowInfo = wx.getWindowInfo()
  statusBarHeight.value = windowInfo.statusBarHeight || 0

  // 获取菜单按钮信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect()

  // 计算标题栏高度（更精确的公式）
  titleBarHeight.value = (menuButtonInfo.top - statusBarHeight.value) * 2 + menuButtonInfo.height + 5

  // 总导航栏高度 = 状态栏 + 标题栏
  navBarHeight.value = statusBarHeight.value + titleBarHeight.value

  console.log('导航栏计算参数:', {
    statusBarHeight: statusBarHeight.value,
    menuButtonTop: menuButtonInfo.top,
    menuButtonHeight: menuButtonInfo.height,
    calculatedTitleBarHeight: titleBarHeight.value,
    totalNavBarHeight: navBarHeight.value
  })
})
watchEffect(() => {
  switch (status.value) {
    case 0:
      navBarBackColor.value = '#fe4543'
      navBarColor.value = '2c2c2c'
          break
    case 1:
      navBarBackColor.value = '#fff'
      navBarColor.value = '2c2c2c'
          break
    case 2:
      navBarBackColor.value = '#fff'
      navBarColor.value = '2c2c2c'
          break
    case 3:
      navBarBackColor.value = '#fe4543'
      navBarColor.value = '#fff'
          break
  }
  console.log('状态', status.value)
})
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.header-top {
  width: 100%;
}

.header-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 10px;
}
.header-content-title {
  font-size: 20px;
}
.header-content-title-center {
  width: 100%;
}
.header-content-title-center text{
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-body-search {
  all: unset;
  background-color: #dddddd;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
}
.content-body-search::after {
  display: none;
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
</style>