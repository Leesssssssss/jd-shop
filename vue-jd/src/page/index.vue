<template>
<!-- 主页 -->
  <div>
    <!-- 返回顶部的定位 -->
    <a id="top"></a>
    <!-- 头部搜索框 -->
    <div class="header">
      <div class="headerPic"><img src="../../static/img/category.png" alt=""></div>
      <input class="input" type="text" placeholder="电脑主机">
      <div class="headerPic"><img src="../../static/img/xiaoxi.png" alt=""></div>
    </div>
    
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for='(item, index) in banners' :key="index">
          <img :src="item">
        </swiper-slide>
        <div id="swiperOwn" class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 小图标列表 -->
    <div class="smallList">
      <div class="smallListItem" v-for="small in smallList">
        <img :src="small.img" alt="">
        <div class="smallListItemText">{{small.text}}</div>
      </div>
    </div>
    
    <!-- 每日抽奖 -->
    <div class="choujiang">
      <div class="choujiangItem1"><img src="../../static/img/b1.jpg" alt=""></div>
      <div class="choujiangItem2"><img src="../../static/img/b2.jpg" alt=""></div>
      <div class="choujiangItem2"><img src="../../static/img/b3.jpg" alt=""></div>
    </div>

    <!-- 秒杀 -->
    <div class="miao">
      <div class="miaoHeader">
        <div class="miaoHeaderLeft">
          <div class="miaoHeaderLeftTitle">京东秒杀</div>
          <div class="miaoHeaderLeftTime">16点场 00:53:15</div>
        </div>
        <div class="miaoHeaderRight">更多秒杀<img src="../../static/img/more.png" alt=""></div>
      </div>
      <div class="miaoSha">
        <div class="miaoShaItem" v-for="item in miaoSha">
          <img :src="item.img" alt="">
          <div class="miaoPrice">￥{{item.miaoPrice}}</div>
          <div class="prePrice">￥{{item.prePrice}}</div>
        </div>
      </div>
    </div>

    <!-- 东家小院 -->
    <div class="dongjia">
      <div class="dongjiaTitle"><img src="../../static/img/dongjia.jpg" alt=""></div>
      <div class="dongjiaTop">
        <div class="dongjiaTopItem">
          <div class="dongjiaTopItemTitle">— 我的大学 —</div>
          <div class="dongjiaTopItemText">全新生活从这里开启</div>
          <div class="dongjiaTopItemPic">
            <img src="../../static/img/daxue1.jpg" alt="">
            <img src="../../static/img/daxue2.jpg" alt="">
          </div>
        </div>
        <div class="dongjiaTopItem">
          <div class="dongjiaTopItemTitle">— 神童学院 —</div>
          <div class="dongjiaTopItemText">小朋友成长教育专区</div>
          <div class="dongjiaTopItemPic">
            <img src="../../static/img/shentong1.jpg" alt="">
            <img src="../../static/img/shentong2.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="dongjiaBottom">
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">二手寻宝</div>
          <div class="dongjiaBottomItemText">跳蚤市场</div>
          <img src="../../static/img/ershou.jpg" alt="">
        </div>
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">科技生活</div>
          <div class="dongjiaBottomItemText">智能家居</div>
          <img src="../../static/img/keji.jpg" alt="">
        </div>
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">头号玩家</div>
          <div class="dongjiaBottomItemText">骨灰级装备</div>
          <img src="../../static/img/touhao.jpg" alt="">
        </div>
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">吸睛大法</div>
          <div class="dongjiaBottomItemText">秒变男神</div>
          <img src="../../static/img/xijing.jpg" alt="">
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <ul class="bottomOne">
        <li @click="toLogin" class="bottomOneItem">登录</li>
        <li @click="toSignUp" class="bottomOneItem">注册</li>
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
      <div class="tabItem"><img src="../../static/img/shouyeR.png" alt=""></div>
      <div class="tabItem"><img @click="toClassify" src="../../static/img/fenlei.png" alt=""></div>
      <div class="tabItem"><img @click="toDiscover" src="../../static/img/faxian.png" alt=""></div>
      <div class="tabItem"><img @click="toCart" src="../../static/img/gouwuche.png" alt=""></div>
      <div class="tabItem"><img @click="toLoginoOrMy" :src="mySrc" alt=""></div>
    </div>

  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
  data() {
    return {
      // 轮播图
      banners: [
        "../../static/img/1.jpg",
        "../../static/img/2.jpg",
        "../../static/img/3.jpg",
        "../../static/img/4.jpg",
        "../../static/img/5.jpg",
        "../../static/img/6.jpg",
        "../../static/img/7.jpg",
        "../../static/img/8.jpg",
      ],
      // 轮播图配置
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      // 小图标列表
      smallList: [
        {img: '../../static/img/chaoshi.png', text: '京东超市'},
        {img: '../../static/img/quanqiu.png', text: '全球购'},
        {img: '../../static/img/fushi.png', text: '京东服饰'},
        {img: '../../static/img/shengxian.png', text: '京东生鲜'},
        {img: '../../static/img/paihang.png', text: '排行榜'},
        {img: '../../static/img/chongzhi.png', text: '充值缴费'},
        {img: '../../static/img/pingou.png', text: '9.9元拼'},
        {img: '../../static/img/quan.png', text: '领券'},
        {img: '../../static/img/zhuanqian.png', text: '赚钱'},
        {img: '../../static/img/quanbu.png', text: '全部'},
      ],
      // 秒杀
      miaoSha: [
        {img: '../../static/img/m1.jpg', miaoPrice: '99', prePrice: '329'},
        {img: '../../static/img/m2.jpg', miaoPrice: '9.9', prePrice: '12.8'},
        {img: '../../static/img/m3.jpg', miaoPrice: '148', prePrice: '325'},
        {img: '../../static/img/m4.jpg', miaoPrice: '16.8', prePrice: '55'},
        {img: '../../static/img/m5.jpg', miaoPrice: '2880', prePrice: '3680'},
        // {img: '../../static/img/m6.jpg', miaoPrice: '1249', prePrice: '1499'},
        // {img: '../../static/img/m7.jpg', miaoPrice: '119', prePrice: '299'},
        // {img: '../../static/img/m8.jpg', miaoPrice: '119', prePrice: '249'},
        // {img: '../../static/img/m9.jpg', miaoPrice: '8295', prePrice: '9600'},
        // {img: '../../static/img/m10.jpg', miaoPrice: '1280', prePrice: '1650'}
      ],
      // 底部tab图标
      mySrc: '../../static/img/weidenglu.png'
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    if (localStorage.login === 'login') {
      this.mySrc = '../../static/img/wode.png';
    }
  },
  methods: {
    goAnchor() {
      app.scrollIntoView();
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
    toLogin() {
      this.$router.push({ 'path': '/login' });
    },
    toLoginoOrMy() {
      if (localStorage.login === 'login') {
        this.$router.push({ 'path': '/my' });
      } else {
        this.$router.push({ 'path': '/login' });
      }
    },
    toSignUp() {
      this.$router.push({ 'path': '/signUp' });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";

</style>
