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


  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      haveAddress: true,
      address: {},
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
