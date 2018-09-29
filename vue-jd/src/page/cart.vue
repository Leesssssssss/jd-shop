<template>
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">购物车</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 购物车为空 -->
    <div class="unLogin" v-show="emptyCart">
      <img src="../../static/img/cart.png" alt="">
      <div class="unLoginText">{{text}}</div>
      <button v-show="loginBtn" class="unLoginBtn" @click="toLogin">登录</button>
    </div>

    <!-- 购物车不为空 -->
    <div class="cart" v-show="cart">
      <div class="shopName">
        <div class="checkBox"></div>
        <img src="../../static/img/jdd.png" alt="">
        <span class="shopNameTitle">京东自营</span>
      </div>
      <div class="goodList" v-for="good in goods">
        <div class="checkBox"></div>
        <img :src="good.pic" alt="">
        <div class="goodInfo">
          <div class="goodInfoTitle">
            <img src="https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" alt="">
            <span class="goodInfoText">{{good.goodName}}</span>
          </div>
          <div class="goodInfoKouwei">0.72kg/件,  {{good.kouwei}}</div>
          <div class="goodInfoPriceAndCount">
            <div class="goodInfoPrice">￥{{good.price}}</div>
            <div class="chooseCountBox">
              <img :src="minus" @click="toMinus" alt="">
              <div class="chooseCountBoxInput"><input type="text" v-model="count" value="1"></div>
              <img :src="add" @click="toAdd" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      emptyCart: true,
      cart: false,
      text: '登录后可同步购物车中商品',
      loginBtn: true,
      goods: [],
      count: 1,
      minus: '../../static/img/unMinus.png',
      add: '../../static/img/add.png'
    }
  },
  created() {
    if (localStorage.login === 'login') {
      this.loginBtn = false;
      this.text = '购物车空空如也，去逛逛吧~';
      axios.post('http://localhost:7001/getCart',{ userName: localStorage.userName }).then(result => {
        var cart = result.data[0].cart;
        this.goods = cart;
        console.log(cart);
        if (cart.length !== 0) {
          this.emptyCart = false;
          this.cart = true;
        } else {
          this.emptyCart = true;
          this.cart = false;
        }
      });
    }
  },
  watch: {
    count: function(val, oldval) {
      console.log(val);
      if (val == 1) {
        this.minus = '../../static/img/unMinus.png';
      } 
      if (val != 1) {
        this.minus = '../../static/img/minus.png';
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toLogin() {
      this.$router.push({ 'path': '/login' });
    },
    toMinus() {
      if (this.count != 1) {
        this.count -= 1;
      }
    },
    toAdd() {
      this.count += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/cart.scss';

</style>
