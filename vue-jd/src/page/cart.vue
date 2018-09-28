<template>
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">购物车</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 购物车为空 -->
    <div class="unLogin">
      <img src="../../static/img/cart.png" alt="">
      <div class="unLoginText">{{text}}</div>
      <button v-show="loginBtn" class="unLoginBtn" @click="toLogin">登录</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '登录后可同步购物车中商品',
      loginBtn: true
    }
  },
  created() {
    if (localStorage.login === 'login') {
      this.loginBtn = false;
      this.text = '购物车空空如也，去逛逛吧~'
    } 
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toLogin() {
      this.$router.push({ 'path': '/login' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/cart.scss';

</style>
