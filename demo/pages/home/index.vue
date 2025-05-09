<template>
	<view class="content">
    <view class="content-body">
      <!--搜索与公告-->
      <view class="content-body-top">
        <!--搜索-->
        <view class="content-body-search">
          <view class="content-body-search-svg">
            <image src="/static/搜索_search.svg" alt=""/>
          </view>
          <input class="content-body-search-input" placeholder="请输入搜索的商品"></input>
        </view>
        <!--公告-->
        <view class="content-body-announcement">
          <view class="content-body-announcement-svg">
            <image src="/static/喇叭.svg" alt=""/>
          </view>
          <view class="content-body-announcement-title">公告</view>
          <view class="content-body-announcement-text">
            <view class="content-body-announcement-text-scroll">注意!!!这是一个滚动公告</view>
          </view>
        </view>
      </view>
      <!--主体-->
      <view class="content-body-Subject">
        <view class="content-body-Subject-classify">
          <view class="content-body-Subject-classify-img">
            <image src="/static/logo.png" alt=""></image>
            仔猪
          </view>
          <view class="content-body-Subject-classify-img">
            <image src="/static/logo.png" alt=""></image>
            商品猪
          </view>
          <view class="content-body-Subject-classify-img">
            <image src="/static/logo.png" alt=""></image>
            孕母猪
          </view>
          <view class="content-body-Subject-classify-img">
            <image src="/static/logo.png" alt=""></image>
            全国商运
          </view>
        </view>
        <view class="content-body-Subject-recommend">
          <view class="content-body-Subject-recommend-title">
            <image src="/static/logo.png" alt="" ></image>
            每日精选
          </view>
          <view class="content-body-Subject-recommend-body">
            <view class="content-body-Subject-recommend-body-list">
             <view class="content-body-Subject-recommend-body-goods">
                <view class="content-body-Subject-recommend-goods-name" title="">aaa批发猪肉111111111111111111111111111111111111111111111111</view>
                <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
              </view>
             <view class="content-body-Subject-recommend-body-goods">
               <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
               <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
             </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
             <view class="content-body-Subject-recommend-body-goods">
              <view class="content-body-Subject-recommend-goods-name" style="font-size: 18px">aaa批发猪肉</view>
              <view class="content-body-Subject-recommend-goods-data" style="font-size: 13px">2005/7/57</view>
            </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!--导航栏-->
    <view class="content-bottom">
      <navigator url="/pages/home/index" class="content-button" style="color: #ff4544 " open-type="navigate">
        <image src="/static/首页_home_red.svg"></image>
        首页
      </navigator>
      <navigator url="/pages/classify/index" class="content-button" open-type="navigate">
        <image src="/static/瀑布流横向_waterfalls-h.svg"></image>
        分类
      </navigator>
      <navigator url="/pages/shopping_cart/index" class="content-button" open-type="navigate">
        <image src="/static/购物车_shopping.svg"></image>
        购物车
      </navigator>
      <navigator url="/pages/user/index"  class="content-button" open-type="navigate">
        <image src="/static/人员_people.svg"></image>
        我的
      </navigator>
    </view>
  </view>
</template>

<script setup>
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
    height: 100%;
    width: 100%;
	}
  .content-body {
    width: 100%;
    height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
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
  .content-body-top {
    height: 11%;
    background-color: #17c969;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .content-body-search {
    background-color: #ffffff;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 35%;
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
  .content-body-announcement {
    box-sizing: border-box;
    width: 100%;
    height: 25px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    color: #ebfff8;
  }
  .content-body-announcement-svg {
    width: 25px;
    height: 20px;
  }
  .content-body-announcement-svg image {
    width: 20px;
    height: 20px;
  }
  .content-body-announcement-title {
    width: 40px;
  }
  .content-body-announcement-text {
    width: 0;
    flex-grow: 1;
    overflow: hidden;
  }
  .content-body-announcement-text-scroll {
    animation: translate 7s linear infinite;
    transform: translateX(100%);
  }
  @keyframes translate {
    0% {
      transform: translateX(100%);
    } 
    100% {
      transform: translateX(-100%);
    }
  }
  .content-body-Subject {
    height:0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .content-body-Subject-classify {
    height: 17%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .content-body-Subject-classify-img {
    width: 17%;
    height: 78%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: bold;
    align-items: center;
  }
  .content-body-Subject-classify-img image {
    width: 100%;
    height: 80%;
  }
  .content-body-Subject-recommend {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .content-body-Subject-recommend-title {
    font-size: 17px;
    color: red;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .content-body-Subject-recommend-title image {
    width: 25px;
    height: 15px;
    box-sizing: border-box;
    padding: 0 5px 0 5px;
  }
  .content-body-Subject-recommend-body {
    height: 0;
    flex-grow: 1;
    overflow-y: auto; /* 启用垂直滚动 */
    overflow-x: hidden; /* 隐藏水平滚动 */
    -webkit-overflow-scrolling: touch; /* 优化 iOS 滚动 */
    display: flex;
    flex-direction: column;
  }
  .content-body-Subject-recommend-body::-webkit-scrollbar {
    display: none;
  }
  .content-body-Subject-recommend-body-goods {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 64px;
    justify-content: space-evenly;
    box-sizing: border-box;
    padding-left: 10px;
    position: relative;
  }
  .content-body-Subject-recommend-body-goods::before {
    position: absolute;
    content: '';
    background-color: #dbdbdb;
    height: 1px;
    width: 100%;
    top: 63px;
    left: 0;
  }
  .content-body-Subject-recommend-goods-name {
    font-size: 18px; 
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
</style>
