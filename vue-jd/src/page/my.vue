<template>
  <div>
     <!-- 返回顶部的定位 -->
    <a id="top"></a>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">我的京东</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 个人资料卡 -->
    <div class="card">
      <div class="touxiang">
        <img src="../../static/img/touxiang.png" alt="">
      </div>
      <div class="userInfo">
        <img class="compile" src="../../static/img/compile.png" alt="">
        <span class="userInfoText">用户名：{{userName}}</span>
        <div class="tongpai">
          <img class="tongpaiPic" src="../../static/img/tongpai.png" alt="">
          <span class="tongpaiText">铜牌会员</span>
        </div>
      </div>
      <div class="shezhi">
        <img src="../../static/img/shezhi.png" alt="">
        <span class="shezhiText">账号管理</span>
      </div>
    </div>

    <!-- 条框1 -->
    <div class="oneBox">
      <div class="oneBoxItem">
        <img src="../../static/img/pay.png" alt="">
        <span class="oneBoxItemText">待付款</span>
      </div>
      <div class="oneBoxItem">
        <img src="../../static/img/car.png" alt="">
        <span class="oneBoxItemText">待收货</span>
      </div>
      <div class="oneBoxItem">
        <img src="../../static/img/tui.png" alt="">
        <span class="oneBoxItemText">退换/售后</span>
      </div>
      <div class="oneBoxItem">
        <img src="../../static/img/ding.png" alt="">
        <span class="oneBoxItemText">全部订单</span>
      </div>
    </div>

    <!-- 条框2 -->
    <div class="twoBox">
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">0</span>
          <span class="twoBoxItemTextR">张</span>
        </div>
        <span class="twoBoxItemText">京东券</span>
      </div>
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">0</span>
          <span class="twoBoxItemTextR">元</span>
        </div>
        <span class="twoBoxItemText">开通白条</span>
      </div>
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">5</span>
          <span class="twoBoxItemTextR">个</span>
        </div>
        <span class="twoBoxItemText">京豆</span>
      </div>
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">0</span>
          <span class="twoBoxItemTextR">张</span>
        </div>
        <span class="twoBoxItemText">礼品卡</span>
      </div>
      <div class="twoBoxItem">
        <img src="../../static/img/zichan.png" alt="">
        <span class="twoBoxItemText">全部资产</span>
      </div>
    </div>

    <!-- 条框3 -->
    <div class="threeBox">
      <div class="threeBoxItem">
        <span class="threeBoxItemNum">0</span>
        <span class="threeBoxItemText">关注的商品</span>
      </div>
      <div class="threeBoxItem">
        <span class="threeBoxItemNum">0</span>
        <span class="threeBoxItemText">关注的店铺</span>
      </div>
      <div class="threeBoxItem">
        <span class="threeBoxItemNum">0</span>
        <span class="threeBoxItemText">我的足迹</span>
      </div>
    </div>

    <!-- 条框4 -->
    <div class="fourBox">
      <div class="fourBoxItem">
        <img src="../../static/img/w1.png" alt="">
        <span class="fourBoxItemText">用户福利</span>
      </div>
      <div class="fourBoxItem">
        <img src="../../static/img/w2.png" alt="">
        <span class="fourBoxItemText">京东火车票</span>
      </div>
      <div class="fourBoxItem">
        <img src="../../static/img/w3.png" alt="">
        <span class="fourBoxItemText">我的预约</span>
      </div>
      <div class="fourBoxItem">
        <img src="../../static/img/w4.png" alt="">
        <span class="fourBoxItemText">应用推荐</span>
      </div>
      <div class="fourBoxItem">
        <img src="../../static/img/w5.png" alt="">
        <span class="fourBoxItemText">京东通信营业厅</span>
      </div>
      <div class="fourBoxItem">
        <img src="../../static/img/w6.png" alt="">
        <span class="fourBoxItemText">京东机票</span>
      </div>
      <div class="fourBoxItem">
        <img src="../../static/img/w7.png" alt="">
        <span class="fourBoxItemText">京东酒店</span>
      </div>
      <div class="fourBoxItem"></div>
    </div>

    <!-- 条框5 -->
    <div class="fiveBox">
      <span class="fiveBoxText">客户服务</span>
      <img src="../../static/img/backRight.png" alt="">
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <ul class="bottomOne">
        <li class="bottomOneItem" @click="toIndex">{{userName}}</li>
        <li class="bottomOneItem" @click="outLogin">退出</li>
        <li class="bottomOneItem">反馈</li>
        <li class="bottomOneItemLast" @click="goAnchor">返回顶部</li>
      </ul>
      <ul class="bottomTwo">
        <li class="bottomTwoItem"><img src="../../static/img/kehuduan.png" alt=""></li>
        <li class="bottomTwoItem"><img src="../../static/img/guojiban.png" alt=""></li>
        <li class="bottomTwoItem"><img src="../../static/img/diannaoban.png" alt=""></li>
      </ul>
      <div class="bottomText">Copyright &copy; 2018 京东版权所有</div>
    </div>

    <div class="box"></div>

    <!-- 底部导航栏 -->
    <div class="tab">
      <div class="tabItem"><img @click="toIndex" src="../../static/img/shouye.png" alt=""></div>
      <div class="tabItem"><img @click="toClassify" src="../../static/img/fenlei.png" alt=""></div>
      <div class="tabItem"><img @click="toDiscover" src="../../static/img/faxian.png" alt=""></div>
      <div class="tabItem"><img @click="toCart" src="../../static/img/gouwuche.png" alt=""></div>
      <div class="tabItem"><img src="../../static/img/wodeR.png" alt=""></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  },
  created() {
    this.userName = localStorage.userName;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goAnchor() {
      app.scrollIntoView();
    },
    outLogin() {
      localStorage.clear();
      location.reload();
      this.$router.push({ 'path': '/login' });
    },
    toIndex() {
      this.$router.push({ 'path': '/' });
    },
    toClassify() {
      this.$router.push({ 'path': '/classify' });
    },
    toDiscover() {
      this.$router.push({ 'path': '/discover' });
    },
    toCart() {
      this.$router.push({ 'path': '/cart' });
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/my.scss";

</style>
