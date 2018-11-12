<template>
  <!-- 订单详情页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">订单详情</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <div class="orderTitle">
      <div class="orderTitleItem">
        <span class="title">订单状态：</span><span class="text">已签收</span>
      </div>
      <div class="orderTitleItem">
        <span class="title">订单编号：</span><span class="text">{{order.orderNum}}</span>
      </div>
      <div class="orderTitleItem">
        <span class="title">下单时间：</span><span class="text">{{order.orderNum | formatDate}}</span>
      </div>
      <button class="btn">再次购买</button>
    </div>

    <div class="orderInfo">
      <div class="orderInfoItem">
        <span class="title">商品金额：</span><span class="text">￥{{order.price}}</span><span class="title">（在线支付）</span>
      </div>
      <div class="orderInfoItem">
        <span class="title">收货地址：</span><span class="text">{{(order.address.city + order.address.addressDetail).replace(/\s*/g,"")}}</span>
      </div>
      <div class="orderInfoItem">
        <span class="title">收货人：</span><span class="text">{{order.address.name}}  {{order.address.telNum.slice(0, 3) + "****" + order.address.telNum.slice(7)}}</span>
      </div>
      <div class="orderInfoItem">
        <span class="title">配送方式：</span><span class="text">普通快递</span>
      </div>
    </div>

    <div class="orderInfo">
      <div class="orderInfoItem">
        <span class="title">发票类型：</span><span class="text">电子普通发票</span><span class="title">（已开票）</span>
      </div>
      <div class="orderInfoItem">
        <span class="title">发票抬头：</span><span class="text">个人</span>
      </div>
      <div class="orderInfoItem">
        <span class="title">发票内容：</span><span class="text">明细</span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      order: []
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  created() {
    // axios
    //   .get("http://localhost:7001/getInfo", {
    //     params: { userName: localStorage.userName }
    //   })
    //   .then(res => {
    //     this.order = res.data[0].order;
    //   });
    this.order = this.$route.params.order;
    console.log(this.order);
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/orderDetail.scss";
</style>
