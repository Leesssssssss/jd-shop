<template>
  <!-- 订单详情页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">订单详情</span>
      <img src="../../static/img/lookMore.png" alt="">
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
  created() {
    axios
      .get("http://localhost:7001/getInfo", {
        params: { userName: localStorage.userName }
      })
      .then(res => {
        this.order = res.data[0].order;
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
@import "./scss/orderDetail.scss";
</style>
