<template>
  <!-- 支付页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">京东收银台</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <div class="needPay">
      <span class="needPayTitle">需支付：</span>
      <span class="needPayText">{{price}}元</span>
    </div>

    <!-- 银行卡等 -->
    <div class="pay">
      <div class="jdPay">
        <img src="../../static/img/jdPay.png" alt="">
      </div>
      <div class="bankCard">
        <div class="ICBC">
          <div class="leftBox">
            <img src="../../static/img/ICBC.png" alt="">
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
          <img src="../../static/img/backRight.png" alt="">
        </div>

        <div class="baiTiao">
          <div class="leftBox">
            <img src="../../static/img/baitiao.png" alt="">
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
            <img src="../../static/img/jinku.png" alt="">
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
    <button class="btn">银行卡支付{{price}}元</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      price: "33.80",
      isChoose: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/pay.scss";
</style>
