'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/signUp', controller.home.signUp);
  router.post('/login', controller.home.login);
  router.post('/addCart', controller.home.addCart);
  router.get('/getInfo', controller.home.getInfo);
  router.post('/updateCart', controller.home.updateCart);
  router.post('/deleteGood', controller.home.deleteGood);
  router.post('/changePassword', controller.home.changePassword);
  router.post('/changeTelNum', controller.home.changeTelNum);
  router.post('/addAddress', controller.home.addAddress);
  router.post('/deleteAddress', controller.home.deleteAddress);
  router.post('/getAddress', controller.home.getAddress);
  router.post('/updateAddress', controller.home.updateAddress);
  router.get('/updateOrderAddress', controller.home.updateOrderAddress);


};
