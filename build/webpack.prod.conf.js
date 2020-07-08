const merge = require('webpack-merge')
const base = require('./webpack.base.conf');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //css压缩

module.exports=merge(base,{
  mode:'production',
  output:{
    filename: 'jxs/[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin()
  ],
  optimization:{
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp:/\.css$/g,
        cssProcessor:require("cssnano"),
        cssProcessorPluginOptions:{
          preset:['default', { discardComments: { removeAll:true } }]
        },
        canPrint:true
      })
    ],  //js体积压缩
    splitChunks:{
      chunks:'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        commons: {
          test: "commons",
          name: "commons",
          enforce: true
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      }
    },
  }
})