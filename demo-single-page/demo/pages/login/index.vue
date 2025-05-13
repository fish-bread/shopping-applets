<template>
  <other-head-index></other-head-index>
  <!--登录页面-->
      <view class="login-page">
        <view class="login-box">
          <view class="page-box-not-user">
            <!--logo-->
            <view class="login-logo">
              <text>logo</text>
            </view>
            <!--用户input-->
            <view class="user-box">
              <view class="user-input-box">
                <view class="user-input">
                  <input v-model="user_login.user_email" placeholder="邮箱" maxlength="21" />
                </view>
                <view class="user-input-captcha">
                  <input v-model="user_login.user_captcha" placeholder="验证码" maxlength="6" />
                  <button  @click="captcha_func">
                    发送验证码
                  </button>
                </view>
              </view>
              <!--条款确认-->
              <view class="user-article">
                <button class="user-article-button">
                </button>
                <view style="color: grey">已同意并阅读条款</view>
              </view>
              <!--登录-->
              <view class="user-login-in">
                <button @click="login_func">
                  登录或验证
                </button>
              </view>
            </view>
            <!--其余操作-->
            <a class="user-bottom">更多功能</a>
          </view>
        </view>
      </view>
</template>

<script setup>
import {captcha_func, login_func} from "/request/login";
import {user_login} from "@/function/user";
import OtherHeadIndex from "@/component/headComponents/otherHeadIndex.vue";

</script>

<style scoped>
.login-page {
  height: 100%;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.login-logo {
  width: 200px;
  height: 70px;
  background-color: #fe4543;
  box-sizing: border-box;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.login-box {
  width: 300px;
  height: 400px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
html,
body {
  overscroll-behavior-x: none;
  overscroll-behavior-y: none;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
image {
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
}

.page-box-not-user {
  display: grid;
  grid-template-rows: 130px auto 60px;
  justify-items: center;
  -webkit-user-drag: none;
}
.user-box {
  width: 270px;
  display: grid;
  grid-template-rows: 110px auto 80px;
}
.user-input-box {
  box-sizing: border-box;
  padding-top: 10px;
  height: 100%;
  display: grid;
  grid-template-rows: 43px 43px;
  grid-row-gap: 12px;
}
.user-input {
  background-color: #f8f8f8 !important;
  border-radius: 7px;
  overflow: hidden;
}
.user-input-captcha {
  display: grid;
  grid-template-columns: 150px auto;
  grid-column-gap: 10px;
  border-radius: 7px;
  overflow: hidden;
}
input {
  background-color: #f8f8f8 !important;
  all: unset;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  border-radius: 7px;
}
.user-article {
  font-size: 12px;
  display: grid;
  grid-template-columns: 18px auto;
  align-items: center;
  grid-column-gap: 5px;
  justify-items: left;
}
.user-article-button {
  all: unset;
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 18px;
  border: 1px solid black;
  display: grid;
  align-items: center;
  justify-content: center;
}
.user-article-button:hover {
  background-color: #cfe8f5;
}
.user-login-in {
  box-sizing: border-box;
  padding-top: 13px;
}
.user-bottom {
  all: unset;
  width: 270px;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 13px;
  color: grey;
  cursor: pointer;
}
.user-bottom:hover {
  text-decoration: underline;
}
button::after {
  display: none;
}
</style>