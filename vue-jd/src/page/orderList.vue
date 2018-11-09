<template>
  <!-- 订单详情页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">订单列表</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 搜索框 -->
    <div class="search">
      <input type="text" placeholder="商品名称/商品编号/订单号">
    </div>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#ffffff"
      text-color="#333333"
      active-text-color="#e93b3d">
      <el-menu-item index="1">所有订单</el-menu-item>
      <el-menu-item index="2">待付款</el-menu-item>
      <el-menu-item index="3">待收货</el-menu-item>
      <el-menu-item index="4">待完成</el-menu-item>
    </el-menu>

    <!-- 订单列表 -->
    <div class="orderList" v-for="order in orders">
      <div class="orderListItem">
        <div class="orderNum">
          <span class="orderNumTitle">订单号：</span>
          <span class="orderNumText">{{order.orderNum}}</span>
        </div>
        <img src="../../static/img/delete1.png" alt="">
      </div>

      <div class="orderListItem">
        <div class="orderInfo">
          <div>
            <span class="orderInfoTitle">状态：</span>
            <span class="orderInfoTextR">已签收</span>
          </div>
          <div>
            <span class="orderInfoTitle">总价：</span>
            <span class="orderInfoText">￥{{order.price}}</span>
          </div>
        </div>
        <button class="btn">再次购买</button>
      </div>

      <div class="goods">
        <div class="shopName">
          <img src="../../static/img/jdd.png" alt="">
          <span class="shopNameTitle">京东</span>
        </div>
        <div class="goodsList" v-for="good in order.goods">
          <img :src="good.pic" alt="">
          <div class="goodsInfo">
            <div class="goodsName">{{good.goodName}}</div>
            <div class="goodsCount">x{{good.count}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">已经没有更多订单了~</div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orders: [],
       activeIndex: '1'
    };
  },
  created() {
    axios
      .get("http://localhost:7001/getInfo", {
        params: { userName: localStorage.userName }
      })
      .then(res => {
        this.orders = res.data[0].order;
        console.log(this.orders);
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/orderList.scss";
</style>
