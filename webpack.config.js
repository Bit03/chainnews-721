'use strict';

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const assetsDir = 'special/'
module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    publicPath: 'https://star2018.chainnews.com/',
    // publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'topic/js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-html-loader'
        ],
      }, {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: { // 这里的options选项参数可以定义多大的图片转换为base64
            limit: 1024, // 小于1kb的图片转为base64
            outputPath: 'topic/image/' //定义输出的图片文件夹
          }
        }]
      }
    ]
  },
  resolve: {},
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './src/index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: "topic/css/[name].[hash].css"
    })
  ],
  devServer:{
    contentBase: path.join(__dirname, "dist"), //静态文件根目录
    port: 8080, // 端口
    host: 'localhost',
    overlay: true,
    compress: true // 服务器返回浏览器的时候是否启动gzip压缩
  }
};