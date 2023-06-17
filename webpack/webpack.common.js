const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new PurgeCSSPlugin({
      paths: ['./src/index.html'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
