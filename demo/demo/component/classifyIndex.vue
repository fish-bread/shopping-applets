<template>
  <view class="content-components">
    <view class="content-components-body">
      <view class="content-components-body-top">
        <!--搜索-->
        <navigator url="/pages/search/index" class="content-body-search">
          <view class="content-body-search-svg">
            <image src="/static/搜索_search.svg" alt=""/>
          </view>
          <input class="content-body-search-input" placeholder="请输入搜索的商品"></input>
        </navigator>
        <!--分类-->
        <view class="content-body-classify">
          <view class="content-body-classify-title">测试</view>
          <view class="content-body-classify-title">测试1</view>
          <view class="content-body-classify-title">测试2</view>
        </view>
      </view>
      <!--分类选择-->
      <!--滚动盒子-->
      <view class="scroll-box">
        <view class="content-body-subject-like">
          <!--商品-->
          <view class="content-body-subject-like-goods-list">
            <view class="content-body-subject-like-goods">
              <image src="/static/logo.png"></image>
              <view class="content-body-subject-like-shopping">
                <view class="content-body-subject-like-shopping-left">
                  <text style=" font-size: 16px;">货物</text>
                  <text style="color: #999999; font-size: 14px;">已售1件</text>
                  <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                </view>
                <view class="content-body-subject-like-shopping-right">
                  <image src="/static/logo.png"></image>
                </view>
              </view>
            </view>
            <view class="content-body-subject-like-goods">
              <image src="/static/logo.png"></image>
              <view class="content-body-subject-like-shopping">
                <view class="content-body-subject-like-shopping-left">
                  <text style=" font-size: 16px;">货物</text>
                  <text style="color: #999999; font-size: 14px;">已售1件</text>
                  <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                </view>
                <view class="content-body-subject-like-shopping-right">
                  <image src="/static/logo.png"></image>
                </view>
              </view>
            </view>
            <view class="content-body-subject-like-goods">
              <image src="/static/logo.png"></image>
              <view class="content-body-subject-like-shopping">
                <view class="content-body-subject-like-shopping-left">
                  <text style=" font-size: 16px;">货物</text>
                  <text style="color: #999999; font-size: 14px;">已售1件</text>
                  <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                </view>
                <view class="content-body-subject-like-shopping-right">
                  <image src="/static/logo.png"></image>
                </view>
              </view>
            </view>
            <view class="content-body-subject-like-goods">
              <image src="/static/logo.png"></image>
              <view class="content-body-subject-like-shopping">
                <view class="content-body-subject-like-shopping-left">
                  <text style=" font-size: 16px;">货物</text>
                  <text style="color: #999999; font-size: 14px;">已售1件</text>
                  <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                </view>
                <view class="content-body-subject-like-shopping-right">
                  <image src="/static/logo.png"></image>
                </view>
              </view>
            </view>
            <view class="content-body-subject-like-goods">
              <image src="/static/logo.png"></image>
              <view class="content-body-subject-like-shopping">
                <view class="content-body-subject-like-shopping-left">
                  <text style=" font-size: 16px;">货物</text>
                  <text style="color: #999999; font-size: 14px;">已售1件</text>
                  <text style="color: #f84746; font-size: 19px;">&yen;&nbsp;1111</text>
                </view>
                <view class="content-body-subject-like-shopping-right">
                  <image src="/static/logo.png"></image>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>

</script>


<style scoped>
.content-components {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content-components-body {
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content-components-body-top {
  height: 11%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 10px rgba(198,198,198,0.5)
}
.content-body-search, uni-navigator {
  background-color: #dddddd;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40%;
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
.content-body-classify {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding-left: 10px;
}
.content-body-classify-title {
  width: 15%;
  background-color: #fe4543;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  color: white;
}
.scroll-box {
  height: 0;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f7f7f7;
}
.content-body-subject-like {
  all: unset;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  background-color: #f7f7f7;
}
.content-body-subject-like-goods-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
.content-body-subject-like-goods {
  width: 48.5%;
  height: 250px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.content-body-subject-like-goods image {
  width: 100%;
  height: 60%;
}
.content-body-subject-like-shopping{
  height: 40%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 5px 0 5px;
  gap: 5px;
}
.content-body-subject-like-shopping-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content-body-subject-like-shopping-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.content-body-subject-like-shopping-right image {
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>
