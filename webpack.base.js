'use strict'

const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/script/main.js'
  },
  output: {
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
          // 'style-loader',
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
  ]
}