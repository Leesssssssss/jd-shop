<template>
<!-- 确认订单页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">确认订单</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 地址 -->
    <div class="address" v-if="haveAddress">
      <div class="addressInfo">
        <div class="addressInfoTitle">{{address.name}}  {{telNum}}</div>
        <div>
          <span class="red" v-if="address.isDefault">默认</span>
          <span class="addressInfoText">{{address.city}}{{address.addressDetail}}</span>
        </div>
      </div>
      <img src="../../static/img/backRight.png" alt="">
    </div>

    <!-- 商品信息 -->
    <div class="cart">
      <div class="shopName">
        <img src="../../static/img/jdd.png" alt="">
        <span class="shopNameTitle">京东自营</span>
      </div>
      <div class="goodList" v-for="(good,index) in goods">
        <img :src="good.pic" alt="">
        <div class="goodInfo">
          <div class="goodInfoTitle">
            <img src="https://img11.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" alt="">
            <span class="goodInfoText">{{good.goodName}}</span>
          </div>
          <div class="goodInfoKouwei">0.72kg/件,  {{good.kouwei}}</div>
          <div class="goodInfoPriceAndCount">
            <div class="goodInfoPrice">￥{{good.price}}</div>
            <div class="goodCount">x {{good.count}}</div>
          </div>
        </div>
      </div>
      <div class="peiSong">
        <span class="peiSongItem1">配送服务</span>
        <span class="peiSongItem2">京东快递</span>
      </div>
      <div class="tuiHuan">
        <span class="tuiHuanItem1">退换无忧</span>
        <span class="tuiHuanItem2">￥0.20</span>
      </div>
    </div>

    <!-- 卡片 -->
    <div class="card">
      <div class="cardItem">
        <span class="cardItemTitle">促销优惠</span>
        <div class="cardItemText1">
          <span>查看更多优惠</span>
          <img src="../../static/img/backRight.png" alt="">
        </div>
      </div>
      <div class="cardItem">
        <span class="cardItemTitle">发票信息</span>
        <div class="cardItemText2">
          <span>电子发票  个人  商品明细</span>
          <img src="../../static/img/backRight.png" alt="">
        </div>
      </div>
      <div class="cardItem">
        <span class="cardItemTitle">礼品卡</span>
        <div class="cardItemText3">
          <span>无可用</span>
          <img src="../../static/img/backRight.png" alt="">
        </div>
      </div>
      <div class="cardItem">
        <span class="cardItemTitle">京豆</span>
        <div class="cardItemText3">
          <span>未满1000个，暂不可使用</span>
          <img src="../../static/img/backRight.png" alt="">
        </div>
      </div>
    </div>

    <!-- 价格 -->
    <div class="price">

    </div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      haveAddress: true,
      address: {},
      goods: [],
      telNum: ''
    }
  },
  created() {
    axios.get('http://localhost:7001/getInfo', {
      params: {
        userName: localStorage.userName
      }
    }).then(res => {
      // 如果用户保存过收货地址
      if (res.data[0].address.length !== 0) {
        for (var i = 0; i < res.data[0].address.length; i++) {
          // 如果用户存在默认地址
          if (res.data[0].address[i].isDefault === true) {
            this.address = res.data[0].address[i];
            this.telNum = (this.address.telNum).slice(0,3) + '*****' + (this.address.telNum).slice(8);
          }
        }
        // 用户之前未保存收货地址
      } else {

      }

      // 获取用户购物车中选中的商品
      var cart = res.data[0].cart;
      for (var i = 0; i< cart.length; i++) {
        if (cart[i].checkStatus === true) {
          this.goods.push(cart[i]);
        }
      }
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/order.scss";

</style>
