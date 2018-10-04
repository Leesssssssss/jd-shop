'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  // 注册
  async signUp() {
    const ctx = this.ctx;
    var userName = ctx.request.body.userName;
    var telNum = ctx.request.body.telNum;
    var password = ctx.request.body.password;

    const User = ctx.model.User;
    var getUserName = await User.find({ userName: userName });
    var getTelNum = await User.find({ telNum: telNum });
    if (getUserName.length === 0) {
      if (getTelNum.length === 0) {
        var user = new User({
          userName: userName,
          telNum: telNum,
          password: password
        });
        await user.save();
        ctx.body = '注册成功！';
      } else {
        ctx.body = '该手机号已被注册！';
      }
    } else {
      ctx.body = '该用户名已被注册！';
    }
  }

  // 登录
  async login() {
    const ctx = this.ctx;
    var account = ctx.request.body.account;
    var password = ctx.request.body.password;

    const User = ctx.model.User;
    var getUserName = await User.find({ userName: account });
    var getTelNum = await User.find({ telNum: account });

    if (getUserName.length !== 0 && getUserName[0].password === password) {
      ctx.body = { message: '登录成功！', data: getUserName[0] };
    } else if (getTelNum.length !== 0 && getTelNum[0].password === password) {
      ctx.body = { message: '登录成功！', data: getTelNum[0] };
    } else {
      ctx.body = '账号或密码错误！';
    }
  }

  // 添加购物车
  async addCart() {
    const ctx = this.ctx;
    var kouwei = ctx.request.body.kouwei;
    var count = ctx.request.body.count;
    var goodName = ctx.request.body.goodName;
    var price = ctx.request.body.price;
    var pic = ctx.request.body.pic;
    var userName = ctx.request.body.userName;

    const User = ctx.model.User;
    var good = {
      goodName: goodName,
      count: count,
      kouwei: kouwei,
      price: price,
      pic: pic,
      checkStatus: false
    }
    await User.update({ userName: userName }, { $push: { cart: { $each:[good], $position: 0 }}});
    // var getUserName = await User.find({ userName: userName }, function (err, docs) {
    //   var newUser = docs[0];
      
    //   newUser.cart = newUser.cart.unshift(good);
    //   newUser.save();
    //   console.log(newUser);
    // });
    ctx.body = 'ok';
  }

  // 获取购物车商品
  async getCart() {
    const ctx = this.ctx;
    var userName = ctx.request.query.userName;

    const User = ctx.model.User;
    var getUserName = await User.find({ userName: userName });

    ctx.body = getUserName;
  }

  // 修改购物车商品信息
  async updateCart() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const _id = ctx.request.body._id;
    const checkStatus = ctx.request.body.checkStatus;
    const count = ctx.request.body.count;

    const User = ctx.model.User;
    await User.update({ userName: userName, 'cart._id': _id }, { $set: { 'cart.$.checkStatus': checkStatus, 'cart.$.count': count } });

    var getUserName = await User.find({ userName: userName });
    ctx.body = getUserName;
  }

  // 删除购物车商品
  async deleteGood() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const _id = ctx.request.body._id;

    const User = ctx.model.User;
    await User.update({ userName: userName }, { $pull: { cart: { _id: _id } } });
    
    var getUserName = await User.find({ userName: userName });
    ctx.body = getUserName;
  }


}

module.exports = HomeController;
