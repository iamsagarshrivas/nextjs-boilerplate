/* eslint-disable no-unused-vars */
var path  = require('path')
var merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9001,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '',
    webDomain: '',
  },
  test: {},
  development: {
    ftp: {
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080
  }
}

module.exports = merge(config.all, config[config.all.env])
