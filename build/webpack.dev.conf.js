const merge = require('webpack-merge')
const base = require('./webpack.base.conf');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')
const htmlPage = fs.readdirSync('src/views/').map((item)=>{
  return new HtmlWebpackPlugin({
    chunks:[item,'common'],
    filename:`${item}.html`,
    template: `src/views/${item}/index.html`,
    inject: 'body',
    hash: false
  })
})
module.exports=merge(base,{
  mode:'development',
  output:{
    filename: 'js/[name].[hash:8].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8088,
    inline: false,
    compress: true,
    hot: true
  },
  plugins:[
    ...htmlPage,
    new webpack.HotModuleReplacementPlugin()
  ]
})