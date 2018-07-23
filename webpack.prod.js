const merge = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = merge(base, {
  mode: 'production',
  output: {
    publicPath: 'https://star2018.chainnews.com/'
  }
})
