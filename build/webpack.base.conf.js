const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV !== 'production'
console.log(process.env.NODE_ENV)
module.exports={
  entry:{
    app:'./src/app.js',
    common: ['react','react-dom'],
  },
  output:{
    filename: 'js/[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:'babel-loader',
        exclude:/node_modules/,
      },
      {
        test:/\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 8192,
          },
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'font/'
          }
        }
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: isProd ? 'css/[name].css':'css/[name].[hash:8].css',
      chunkFilename:isProd ? 'css/[id].css' : 'css/[id].[hash:8].css', //动态引入配置
    }),
  ]
}