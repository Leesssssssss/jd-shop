<template>
  <!-- 账号管理页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">账号管理</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 表单 -->
    <div class="one">当前登录账号</div>
    <div class="two">
      <div>
        <img src="../../static/img/management.png" alt="">
      </div>
      <div class="twoItem">
        <span class="name">{{name}}</span>
        <span class="email">邮箱：未设置</span>
      </div>
    </div>
    <div class="three" @click="changePassword">
      <div>修改登录密码</div>
      <img src="../../static/img/right.png" alt="">
    </div>
    <div class="three" @click="changeTelNum">
      <div>修改绑定手机号码</div>
      <div class="threeItem">
        <div class="telNum">{{telNum}}</div>
        <img src="../../static/img/right.png" alt="">
      </div>
    </div>
    <div class="three">
      <div>支付密码管理</div>
      <img src="../../static/img/right.png" alt="">
    </div>
    <div class="three">
      <div>收货地址管理</div>
      <img src="../../static/img/right.png" alt="">
    </div>
    <div class="three">
      <div>切换站点</div>
      <img src="../../static/img/right.png" alt="">
    </div>
    <div class="three">
      <div>实名认证</div>
      <img src="../../static/img/right.png" alt="">
    </div>
    <div class="three">
      <div>关联账号</div>
      <img src="../../static/img/right.png" alt="">
    </div>

    <!-- 底部 -->
    <div class="tab">
      <div class="tabItem">
        <img src="../../static/img/fankui.png" alt="">
        <span class="tabItemText">意见反馈</span>
      </div>
      <div class="tabItem">
        <img src="../../static/img/jdDog.png" alt="">
        <span class="tabItemText">京东客户端</span>
      </div>
      <div class="tabItem" @click="unLogin">
        <img src="../../static/img/tuichu.png" alt="">
        <span class="tabItemText">退出登录</span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      telNum: ""
    };
  },
  created() {
    // 获取用户名以及手机号码
    this.name = localStorage.userName;
    axios
      .get("http://localhost:7001/getInfo", {
        params: { userName: localStorage.userName }
      })
      .then(res => {
        var result = res.data[0];
        this.telNum =
          result.telNum.slice(0, 3) + "*****" + result.telNum.slice(8);
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 修改密码
    changePassword() {
      this.$router.push({ 'path': '/changePassword' });
    },
    // 修改手机号码
    changeTelNum() {
      this.$router.push({ 'path': '/changeTelNum' });
    },
    // 退出登录
    unLogin() {
      localStorage.clear();
      location.reload();
      this.$router.push({ 'path': '/login' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/accountManagement.scss";
</style>
