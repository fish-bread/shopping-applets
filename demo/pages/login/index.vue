<template>
      <view class="login-page">
        <view class="login-logo">logo</view>
        <view class="login-box">
          盒子
        </view>
      </view>
</template>

<script setup lang="ts">

</script>

<style scoped>
.login-page {
  height: 100%;
  background-color: lightpink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-logo {
  width: 200px;
  height: 70px;
  background-color: burlywood;
  box-sizing: border-box;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 2px;
}
.login-box {
  width: 300px;
  height: 400px;
  background-color: khaki;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
}
</style>
