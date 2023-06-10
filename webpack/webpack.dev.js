const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    static: ['src'],
  },
  mode: 'development',
})
