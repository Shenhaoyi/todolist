//导入path模块，用以获取绝对路径
const path = require('path')

// 引入 vue-loader的插件
const {VueLoaderPlugin} = require('vue-loader')
//在dist中创建html
const HtmlWebpackPlugin = require('html-webpack-plugin')
//打包前删除dist目录的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  //打包入口文件
  entry: './src/main.js',
  //打包出口文件
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')  //当前目录下的绝对路径下的dist文件,打包成的文件的bundle.js
  },
  //打包规则
  module: {
    rules: [  //很多规则，数组中一个对象就是一条规则
      {
        test: /\.vue$/, //匹配以.vue结尾的文件
        loader: 'vue-loader' //只等loader
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/, //匹配图片
        loader: 'url-loader', //file-loader
        options: {
          // name: '[name].[ext]' //保留原文件名
          limit: 2048 //2048 Byte 以下的直接以base64放在js中
        }
      },
      {
        test: /\.css$/, //只等loader
        use: ['style-loader', 'css-loader'] //2个loader不好直接写一个loader，使用use。从右到左的顺序执行的
      },
      {
        test: /\.styl(us)?$/,  //styl结尾或者stylus结尾
        use: ['vue-style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'] //stylus先加载成css
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],//sass先加载成css
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,//排除node_modules中的文件
        loader: 'babel-loader'
      }
    ]
  },
  //配置插件
  plugins: [
    new VueLoaderPlugin(), //实例化对象
    new HtmlWebpackPlugin({
      template: './index.html' //以当前目录的index.html为模板
    }),
    new CleanWebpackPlugin(),
  ],
  //添加别名，因为Vue默认导出的是 vue.common.js,
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js', //from 'vue' 相当于右边的
      '@': path.resolve(__dirname, '../src'), //src
      'styles': path.resolve(__dirname, '../src/assets/styles'),
      'images': path.resolve(__dirname, '../src/assets/images')
    }
  },
}