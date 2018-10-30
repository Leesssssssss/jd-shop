<template>
  <!-- 收货地址页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">收货地址</span>
      <img src="../../static/img/lookMore.png" alt="">
    </div>

    <!-- 地址 -->
    <div class="address" v-for="item in address">
      <div class="chooseBox" @click="choose(item)">
        <div v-if="chooseBox" :class="{ checkBoxR: item.isChoose, checkBox: !item.isChoose }"></div>
      </div>
      <div class="addressInfo" @click="choose(item)">
        <div class="addressInfoTitle">{{item.name}}  {{(item.telNum).slice(0,3) + '*****' + (item.telNum).slice(8)}}</div>
        <div>
          <span class="red" v-if="item.isDefault">默认</span>
          <span class="addressInfoText">{{item.city}}{{item.addressDetail}}</span>
        </div>
      </div>
      <img src="../../static/img/write.png" @click="updateAddress(item)" alt="">
      <img src="../../static/img/delete.png" @click="deleteAddress(item)" alt="">
    </div>

    <div class="box"></div>
    <!-- 底部按钮 -->
    <button class="addAddressBtn" @click="addAddress">新增收货地址</button>

  </div>
</template>

<script>
import axios from "axios";
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      address: [],
      chooseBox: false
    };
  },
  created() {
    if (this.$route.query.order === "order") {
      this.chooseBox = true;
    } else {
      this.chooseBox = false;
    }
    axios
      .get("http://localhost:7001/getInfo", {
        params: {
          userName: localStorage.userName
        }
      })
      .then(res => {
        console.log(res.data);
        this.address = res.data[0].address;
        for (var i = 0; i < res.data[0].address.length; i++) {
          // 如果用户存在默认地址
          if (res.data[0].address[i].isDefault === true) {
            res.data[0].address[i].isChoose = true;
            break;
          } else {
            res.data[0].address[i].isChoose = false;
          }
        }
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addAddress() {
      this.$router.push({ path: "/writeAddress" });
    },
    choose(item) {
      // this.isChoose = !this.isChoose;
      console.log(item);
      item.isChoose = !item.isChoose;
    },
    // 修改地址
    updateAddress(item) {
      var id = item._id;
      this.$router.push({ path: "/writeAddress", query: { id: id } });
    },
    // 删除地址
    deleteAddress(item) {
      MessageBox.confirm("确定删除该地址?")
        .then(action => {
          axios
            .post("http://localhost:7001/deleteAddress", {
              userName: localStorage.userName,
              _id: item._id
            })
            .then(res => {
              console.log(res.data);
              if (res.data === "no") {
                Toast("默认地址不可删除！");
              } else {
                this.address = res.data[0].address;
              }
            });
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
@import "./scss/address.scss";
</style>
