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
    var getUserName = await User.find({ userName: userName }, function(err, docs){
      var newUser = docs[0];
      var good = {
        goodName: goodName,
        count: count,
        kouwei: kouwei,
        price: price,
        pic: pic
      }
      newUser.cart = newUser.cart.concat(good);
      newUser.save();
      console.log(newUser);
    });


    ctx.body = 'ok';
  }


}

module.exports = HomeController;
