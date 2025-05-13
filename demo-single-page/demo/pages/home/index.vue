<template>
  <!--主页面-->
	<view class="content"> 
    <search-head-index></search-head-index>
    <view class="content-body">
      <!--主体组件-->
      <home-index v-show="status === 0"></home-index>
      <classify-index v-show="status === 1"></classify-index>
      <shopping-car-index v-show="status === 2"></shopping-car-index>
      <user-index v-show="status === 3"></user-index>
    </view>
    <!--导航栏-->
    <view class="content-bottom">
      <button v-for="(item, index) in componentsNavigation" :style="item.style" :key="index" @click="changeComponents(index)" class="content-button" >
        <image :src="item.src"></image>
        <text>{{ item.name }}</text>
      </button>
    </view>
  </view>
</template>

<script setup>
import {changeComponents, componentsNavigation, status} from "@/function/componentStatus";
import HomeIndex from "@/component/homeIndex.vue";
import ClassifyIndex from "@/component/classifyIndex.vue";
import ShoppingCarIndex from "@/component/shoppingCarIndex.vue";
import UserIndex from "@/component/userIndex.vue";
import { onMounted } from 'vue'
import {initialize_user} from "@/function/user";
import SearchHeadIndex from "@/component/headComponents/searchHeadIndex.vue";
onMounted(()=> {
  initialize_user()
})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
	}
  .content-body {
    width: 100%;
    height: 0;
    flex: 1;
  }
  .content-bottom {
    width: 100%;
    min-height: 50px;
    height: 8%;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 -1px 10px rgba(198,198,198,0.5)
  }
  .content-button {
    all: unset;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    flex-direction: column;
    font-size: 10px;
  }
  .content-button .navigator-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .content-button::after {
    display: none;
  }
  .content-button image {
    box-sizing: border-box;
    margin-bottom: 5px;
    width: 25px;
    height: 25px;
  }
</style>
