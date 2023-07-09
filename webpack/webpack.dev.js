const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

function config(args) {
  return merge(common(args), {
    devServer: {
      hot: true,
      open: true,
      port: 3000,
      static: ['src'],
    },
    devtool: 'eval-source-map',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportLocalsConvention: 'camelCase',
                  localIdentName: '[path][name]__[local]',
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
