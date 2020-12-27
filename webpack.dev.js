/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-08-02 15:38:35
 */ 


const path = require("path");
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require('./webpack.common')

module.exports= merge(common,{
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8089,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',//your ip address
  },
  resolve:{
    extensions:[".ts",'.tsx','.js','.jsx','.json'],
    alias:{
      '@':path.join(__dirname,"./src"),
      "@images":path.join(__dirname,"./src/images"),
      'react-dom': '@hot-loader/react-dom',
    }
  }
})