<template>
<!-- 填写收货地址页面 -->
  <div>
    <!-- 表单 -->
    <div class="info">
      <div class="infoTitle">收货人</div>
      <input class="infoInput" v-model="name" type="text" placeholder="姓名">
    </div>
    <div class="info">
      <div class="infoTitle">联系方式</div>
      <input class="infoInput" v-model="telNum" type="text" placeholder="手机号码">
    </div>
    <div class="info">
      <div class="infoTitle">所在地区</div>
      <div class="infoInput" @click="toAddress">{{city}}</div>
      <img src="../../static/img/right.png" alt="">
    </div>
    <div class="info">
      <div class="infoTitle">详细地址</div>
      <input class="infoInput" v-model="address" type="text" placeholder="详细地址需填写楼栋楼层或房间号信息">
    </div>
    <div class="moRen">
      <div :class="{ checkBoxR: isChoose, checkBox: !isChoose }" @click="choose"></div>
      <div class="moRenText">设为默认地址</div>
    </div>

    <div class="btn">
      <button class="ok" @click="confirm">确认</button>
    </div>

    <!-- 选择地区 -->
    <div class="divwrap" v-if="addInp">
      <v-distpicker type="mobile" @selected='selected'></v-distpicker>
    </div>
    <div class="mask" v-show="mask"></div>
  </div>  
</template>

<script>
import VDistpicker from "v-distpicker";
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      name: '',
      telNum: '',
      city: "请选择",
      address: '',
      isChoose: false,
      addInp: false,
      mask: false
    };
  },
  components: {
    VDistpicker
  },
  methods: {
    // 显示选择地区的组件
    toAddress() {
      this.mask = true;
      this.addInp = true;
    },
    // 选择地区组件显示省市的方法
    selected(data) {
      this.mask = false;
      this.addInp = false;
      this.city =
        data.province.value + " " + data.city.value + " " + data.area.value;
    },
    choose() {
      this.isChoose = !this.isChoose;
    },
    confirm() {
      // 判断信息是否填写完整
      if (this.name === '') {
        Toast('请填写姓名');
      } else {
        if (this.telNum === '') {
          Toast('请填写手机号码');
        } else {
          if (this.city === '请选择') {
            Toast('请选择所在地区');
          } else {
            if (this.address === '') {
              Toast('请填写详细地址');
            } else {

            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/writeAddress.scss";
</style>
