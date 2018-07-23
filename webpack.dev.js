const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')

module.exports = merge(base, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //静态文件根目录
    port: 8080, // 端口
    host: 'localhost',
    overlay: true,
    compress: true // 服务器返回浏览器的时候是否启动gzip压缩
  }
})