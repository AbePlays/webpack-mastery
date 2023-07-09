const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')
const { validateEnvironment } = require('../app.config')

function config(args) {
  validateEnvironment(args.appEnv)

  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          generator: { filename: 'asset/[name].[contenthash][ext]' },
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type: 'asset/resource',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
      ],
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    output: {
      clean: true,
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new DefinePlugin({
        'process.env.APP_ENV': JSON.stringify(args.appEnv),
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  }
}

module.exports = config
