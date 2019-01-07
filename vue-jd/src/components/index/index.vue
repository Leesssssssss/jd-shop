<template>
<!-- 主页 -->
  <div>
    <!-- 返回顶部的定位 -->
    <a id="top"></a>
    <!-- 头部搜索框 -->
    <div class="header">
      <div class="headerPic">
        <i class="iconfont icon-caidan" style="color:#fff;font-size:30px;"></i>
      </div>
      <input class="input" type="text" placeholder="电脑主机">
      <div class="headerPic">
        <i class="iconfont icon-mark" style="color:#fff;font-size:30px;"></i>
      </div>
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
      <div class="choujiangItem1"><img src="../../assets/b1.jpg" alt=""></div>
      <div class="choujiangItem2"><img src="../../assets/b2.jpg" alt=""></div>
      <div class="choujiangItem2"><img src="../../assets/b3.jpg" alt=""></div>
    </div>

    <!-- 秒杀 -->
    <div class="miao">
      <div class="miaoHeader">
        <div class="miaoHeaderLeft">
          <div class="miaoHeaderLeftTitle">京东秒杀</div>
          <div class="miaoHeaderLeftTime">16点场 00:53:15</div>
        </div>
        <div class="miaoHeaderRight">更多秒杀
          <i class="iconfont icon-roundrightfill" style="color:#f23030;font-size:13px;"></i>
        </div>
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
      <div class="dongjiaTitle"><img src="../../assets/dongjia.jpg" alt=""></div>
      <div class="dongjiaTop">
        <div class="dongjiaTopItem">
          <div class="dongjiaTopItemTitle">— 我的大学 —</div>
          <div class="dongjiaTopItemText">全新生活从这里开启</div>
          <div class="dongjiaTopItemPic">
            <img src="../../assets/daxue1.jpg" alt="">
            <img src="../../assets/daxue2.jpg" alt="">
          </div>
        </div>
        <div class="dongjiaTopItem">
          <div class="dongjiaTopItemTitle">— 神童学院 —</div>
          <div class="dongjiaTopItemText">小朋友成长教育专区</div>
          <div class="dongjiaTopItemPic">
            <img src="../../assets/shentong1.jpg" alt="">
            <img src="../../assets/shentong2.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="dongjiaBottom">
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">二手寻宝</div>
          <div class="dongjiaBottomItemText">跳蚤市场</div>
          <img src="../../assets/ershou.jpg" alt="">
        </div>
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">科技生活</div>
          <div class="dongjiaBottomItemText">智能家居</div>
          <img src="../../assets/keji.jpg" alt="">
        </div>
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">头号玩家</div>
          <div class="dongjiaBottomItemText">骨灰级装备</div>
          <img src="../../assets/touhao.jpg" alt="">
        </div>
        <div class="dongjiaBottomItem">
          <div class="dongjiaBottomItemTitle">吸睛大法</div>
          <div class="dongjiaBottomItemText">秒变男神</div>
          <img src="../../assets/xijing.jpg" alt="">
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
        <li class="bottomTwoItem"><img src="../../assets/kehuduan.png" alt=""></li>
        <li class="bottomTwoItem"><img src="../../assets/guojiban.png" alt=""></li>
        <li class="bottomTwoItem"><img src="../../assets/diannaoban.png" alt=""></li>
      </ul>
      <div class="bottomText">Copyright &copy; 2018 京东版权所有</div>
    </div>


    <div class="box"></div>
    <!-- 底部导航栏 -->
    <div class="tab">
      <div class="tabItem">
        <i class="iconfont icon-homefill" style="color:#f23030;font-size:28px;"></i>
        <div class="tabTitR">首页</div>
      </div>
      <div class="tabItem" @click="toClassify">
        <i class="iconfont icon-sousuoleimu" style="color:#7c7e86;font-size:28px;"></i>
        <div class="tabTit">分类</div>
      </div>
      <div class="tabItem" @click="toDiscover">
        <i class="iconfont icon-faxian" style="color:#7c7e86;font-size:28px;"></i>
        <div class="tabTit">发现</div>
      </div>
      <div class="tabItem" @click="toCart">
        <i class="iconfont icon-cart" style="color:#7c7e86;font-size:28px;"></i>
        <div class="tabTit">购物车</div>
      </div>
      <div class="tabItem" @click="toLoginoOrMy">
        <i class="iconfont icon-my" style="color:#7c7e86;font-size:28px;"></i>
        <div class="tabTit">{{text}}</div>
      </div>
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
        require("../../assets/1.jpg"),
        require("../../assets/2.jpg"),
        require("../../assets/3.jpg"),
        require("../../assets/4.jpg"),
        require("../../assets/5.jpg"),
        require("../../assets/6.jpg"),
        require("../../assets/7.jpg"),
        require("../../assets/8.jpg")
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
        {img: require('../../assets/chaoshi.png'), text: '京东超市'},
        {img: require('../../assets/quanqiu.png'), text: '全球购'},
        {img: require('../../assets/fushi.png'), text: '京东服饰'},
        {img: require('../../assets/shengxian.png'), text: '京东生鲜'},
        {img: require('../../assets/paihang.png'), text: '排行榜'},
        {img: require('../../assets/chongzhi.png'), text: '充值缴费'},
        {img: require('../../assets/pingou.png'), text: '9.9元拼'},
        {img: require('../../assets/quan.png'), text: '领券'},
        {img: require('../../assets/zhuanqian.png'), text: '赚钱'},
        {img: require('../../assets/quanbu.png'), text: '全部'},
      ],
      // 秒杀
      miaoSha: [
        {img: require('../../assets/m1.jpg'), miaoPrice: '99', prePrice: '329'},
        {img: require('../../assets/m2.jpg'), miaoPrice: '9.9', prePrice: '12.8'},
        {img: require('../../assets/m3.jpg'), miaoPrice: '148', prePrice: '325'},
        {img: require('../../assets/m4.jpg'), miaoPrice: '16.8', prePrice: '55'},
        {img: require('../../assets/m5.jpg'), miaoPrice: '2880', prePrice: '3680'},
        // {img: '../../assets/m6.jpg', miaoPrice: '1249', prePrice: '1499'},
        // {img: '../../assets/m7.jpg', miaoPrice: '119', prePrice: '299'},
        // {img: '../../assets/m8.jpg', miaoPrice: '119', prePrice: '249'},
        // {img: '../../assets/m9.jpg', miaoPrice: '8295', prePrice: '9600'},
        // {img: '../../assets/m10.jpg', miaoPrice: '1280', prePrice: '1650'}
      ],
      // 底部tab文字
      text: '未登录'
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    if (localStorage.login === 'login') {
      this.text = '我的';
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
@import "./index.scss";

</style>
