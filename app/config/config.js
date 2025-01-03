const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const environment = process.env.NODE_ENV || 'development';
const baseConfig = {
  appName: process.env.APP_NAME || 'SinisterBEES',
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
};
// console.log(path.join(__dirname, environment))
const environmentConfig = require(path.join(__dirname, environment));
const config = { ...baseConfig, ...environmentConfig };

module.exports = config;
