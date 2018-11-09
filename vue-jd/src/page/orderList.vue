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
      <div></div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orders: []
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/orderList.scss";
</style>
