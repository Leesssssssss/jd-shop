<template>
  <!-- 修改绑定手机号码页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../assets/back.png" alt="">
      <span class="headerText">修改绑定手机号码</span>
      <img src="../assets/lookMore.png" alt="">
    </div>

    <div class="change">
      <input v-model="telNum" type="text" placeholder="请输入重新绑定的手机号码">
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
      telNum: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    confirm() {
      if (this.telNum === "") {
        Toast("手机号码不能为空！");
      } else {
        if (this.telNum.length !== 11) {
          Toast("请输入正确的手机号码！");
        } else {
          axios
            .post("http://jd.hhp.im/changeTelNum", {
              userName: localStorage.userName,
              telNum: this.telNum
            })
            .then(res => {
              Toast("修改成功！");
              this.$router.push({ path: "/accountManagement" });
            });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/changePassword.scss";
</style>
