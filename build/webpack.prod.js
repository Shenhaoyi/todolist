const baseConfig = require('./webpack.base')
const {merge} = require('webpack-merge')

const prodConfig = {
  //环境设置
  mode:'production', //空格什么的没有了
}

module.exports = merge(prodConfig, baseConfig)