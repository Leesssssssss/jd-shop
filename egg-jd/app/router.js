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
};
