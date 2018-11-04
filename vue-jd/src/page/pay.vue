<template>
  <!-- 支付页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">京东收银台</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/pay.scss";

</style>
