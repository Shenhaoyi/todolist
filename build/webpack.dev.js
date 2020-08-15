const baseConfig = require('./webpack.base')
const {merge} = require('webpack-merge')

//导入热模块用的
const webpack = require('webpack')
const devConfig = {
  //环境设置
  mode: 'development', //开发时使用
  //sourceMap
  devtool: 'cheap-module-eval-source-map',
  //配置插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // devServer配置
  devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
    hot: true,
  }
}

module.exports = merge(baseConfig,devConfig)