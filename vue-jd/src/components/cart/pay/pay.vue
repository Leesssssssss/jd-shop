<template>
  <!-- 支付页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <i class="iconfont icon-back" style="color:#909295;font-size:25px;margin:0 10px;" @click="back"></i>
      <span class="headerText">京东收银台</span>
      <i class="iconfont icon-more" style="color:#909295;font-size:25px;margin:0 10px;"></i>
    </div>

    <div class="needPay">
      <span class="needPayTitle">需支付：</span>
      <span class="needPayText">{{price}}元</span>
    </div>

    <!-- 银行卡等 -->
    <div class="pay">
      <div class="jdPay">
        <img src="../../../assets/jdPay.png" alt="">
      </div>
      <div class="bankCard">
        <div class="ICBC">
          <div class="leftBox">
            <img src="../../../assets/ICBC.png" alt="">
            <div class="leftItem">
              <div class="name">工商银行</div>
              <div class="text">储蓄卡（0001）</div>
            </div>
          </div>
          <div class="rightBox">
            <div :class="{ checkBoxR: isChoose, checkBox: !isChoose }"></div>
          </div>
        </div>

        <div class="other">
          <div class="text">其他银行卡</div>
          <img src="../../../assets/backRight.png" alt="">
        </div>

        <div class="baiTiao">
          <div class="leftBox">
            <img src="../../../assets/baitiao.png" alt="">
            <div class="leftItem">
              <div class="name">打白条</div>
              <div class="text">未开通白条</div>
            </div>
          </div>
          <div class="rightBox">
            <div class="checkBox"></div>
          </div>
        </div>

        <div class="baiTiao">
          <div class="leftBox">
            <img src="../../../assets/jinku.png" alt="">
            <div class="leftItem">
              <div class="name">京东小金库</div>
              <div class="text">未开通小金库</div>
            </div>
          </div>
          <div class="rightBox">
            <div class="checkBox"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <button class="btn" @click="pay">银行卡支付{{price}}元</button>

  </div>
</template>

<script>
import { MessageBox } from "mint-ui";

export default {
  data() {
    return {
      order: {},
      price: "",
      isChoose: true
    };
  },
  created() {
    this.order = this.$route.params.order;
    this.price = this.order.price;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    pay() {
      MessageBox.confirm("确定支付?")
        .then(action => {
          console.log('ok');
          this.$router.push({ name: 'Success', params: { order: this.order } })
        })
        .catch(err => {
          if (err == "cancel") {
            console.log("cancel");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./pay.scss";
</style>
