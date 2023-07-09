const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

function config(args) {
  return merge(common(args), {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportLocalsConvention: 'camelCase',
                  localIdentName: '[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  })
}

module.exports = config
