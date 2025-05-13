<template>
  <view class="header" :style="{ height: navBarHeight + 'px' }">
    <!--状态栏背景-->
    <view class="header-top" :style="{ height: statusBarHeight + 'px' }"></view>
    <!--导航栏内容区域-->
    <view class="header-content" :style="{ height: titleBarHeight + 'px', backgroundColor: '#fff'}" >
      <view class="header-content-back" @click="router_back">
        <image src="/static/1左_left.svg"></image>
      </view>
      <!--title-->
      <view class="header-content-title-center">
        <text>{{ title_text }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { navBarHeight, statusBarHeight, title_text, titleBarHeight} from "@/function/navBar";
import {router_back} from "@/router";
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
  console.log('文本',title_text.value)
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
  flex-direction: row;
  box-sizing: border-box;
  padding-left: 10px;
}
.header-content-back {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-content-back image {
  width: 100%;
  height: 100%;
}
.header-content-title-center {
  width: 100%;
  box-sizing: border-box;
  margin-right: 30px;
}
.header-content-title-center text {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>