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

  // 获取用户信息
  async getInfo() {
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

  // 修改密码
  async changePassword() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const password = ctx.request.body.password;
    
    const User = ctx.model.User;
    await User.update({ userName: userName }, { $set: { 'password': password } });
    var getUserName = await User.find({ userName: userName });
    ctx.body = getUserName;
  }

  // 修改手机号码
  async changeTelNum() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const telNum = ctx.request.body.telNum;
    
    const User = ctx.model.User;
    await User.update({ userName: userName }, { $set: { 'telNum': telNum } });
    var getUserName = await User.find({ userName: userName });
    ctx.body = getUserName;
  }

  // 新增收货地址
  async addAddress() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const name = ctx.request.body.name;
    const telNum = ctx.request.body.telNum;
    const city = ctx.request.body.city;
    const addressDetail = ctx.request.body.addressDetail;
    const isDefault = ctx.request.body.isDefault;

    const User = ctx.model.User;
    var addressInfo = {
      name: name,
      telNum: telNum,
      city: city,
      addressDetail: addressDetail,
      isDefault: isDefault
    }

    if (isDefault === true) {
      await User.update({ userName: userName, 'address.isDefault': true }, { $set: { 'address.$.isDefault': false }});
    }
    await User.update({ userName: userName }, { $push: { address: { $each:[addressInfo], $position: 0 }}});
    var getUserName = await User.find({ userName: userName });
    ctx.body = getUserName;
  }

  // 删除收货地址
  async deleteAddress() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const _id = ctx.request.body._id;

    const User = ctx.model.User;

    var getUserName = await User.find({ userName: userName, 'address._id': _id }, { address: { $elemMatch: { _id: _id } } });
    var isDefault = getUserName[0].address[0].isDefault;
    
    if (isDefault === true) {
      ctx.body = 'no';
    } else {
      await User.update({ userName: userName }, { $pull: { address: { _id: _id } } });
      var result = await User.find({ userName: userName });
      ctx.body = result;
    }
  }

  // 获取收货地址
  async getAddress() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const _id = ctx.request.body._id;

    const User = ctx.model.User;

    var getUserName = await User.find({ userName: userName, 'address._id': _id }, { address: { $elemMatch: { _id: _id } } });
    ctx.body = getUserName;
  }

  // 修改收货地址
  async updateAddress() {
    const ctx = this.ctx;
    const userName = ctx.request.body.userName;
    const _id = ctx.request.body._id;
    const name = ctx.request.body.name;
    const telNum = ctx.request.body.telNum;
    const city = ctx.request.body.city;
    const addressDetail = ctx.request.body.addressDetail;
    const isDefault = ctx.request.body.isDefault;

    const User = ctx.model.User;
    
    if (isDefault === true) {
      await User.update({ userName: userName, 'address.isDefault': true }, { $set: { 'address.$.isDefault': false }});
    }
    
    await User.update({ userName: userName, 'address._id': _id }, { $set: { 
      'address.$.name': name,
      'address.$.telNum': telNum,
      'address.$.city': city,
      'address.$.addressDetail': addressDetail,
      'address.$.isDefault': isDefault }});

    var getUserName = await User.find({ userName: userName });
    ctx.body = getUserName;
  }


}

module.exports = HomeController;
