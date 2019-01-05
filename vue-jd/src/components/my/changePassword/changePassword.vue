<template>
  <!-- 修改登录密码页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../assets/back.png" alt="">
      <span class="headerText">修改登录密码</span>
      <img src="../assets/lookMore.png" alt="">
    </div>

    <div class="change">
      <input v-model="password" type="password" placeholder="请输入新密码">
      <button class="btn" @click="confirm">确认</button>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      password: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    confirm() {
      if (this.password === "") {
        Toast("新密码不能为空！");
      } else {
        axios
          .post("http://localhost:7001/changePassword", {
            userName: localStorage.userName,
            password: this.password
          })
          .then(res => {
            Toast("修改成功！");
            this.$router.push({ 'path': '/accountManagement' });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./changePassword.scss";
</style>
