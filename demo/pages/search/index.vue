<template>
  <view class="content">
    <!--头部-->
    <view class="content--top">
      <!--搜索-->
      <view class="content-body-search-body">
        <view class="content-body-search">
          <view class="content-body-search-svg">
            <image src="/static/搜索_search.svg" alt=""/>
          </view>
          <input class="content-body-search-input" placeholder="请输入搜索的商品"></input>
        </view>
        <button class="content-body-search-body-button">搜索</button>
      </view>
    </view>
    <!--搜索结果-->
    <view class="content-body">
      
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
  background-color: #f7f7f7;
}
.content-body-search-body {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  gap: 10px;
}
.content-body-search-body-button {
  width: 30%;
  all: unset;
  color: #908f92;
  font-size: 14px;
}
.content-body-search-body-button::after {
  display: none;
}
.content-body-search {
  background-color: #ffffff;
  width: 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
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
.content--top {
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px #f0eff3 solid;
}
.content-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
