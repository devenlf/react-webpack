const merge = require('webpack-merge')
const base = require('./webpack.base.conf');
const path = require('path');

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
    minimizer: [new UglifyJsPlugin()],
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
    }
  }
})