'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533816005743_9196';

  // add your config here
  config.middleware = [];

  exports.mongoose = {
    url: 'mongodb://127.0.0.1/jd',
    options: {},
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://jser.hhp.im']
  };

  return config;
};
