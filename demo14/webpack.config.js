/**
 * 1. clean-webpack-plugin: 每次打包前清除指定文件夹下的文件
 * 2. CMD 运行 webpack -w --progress --display-reasons --color: 开启watch模式, 并且可以清晰地看到打包过程
 */

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    publicPath: __dirname + "/dist/", // js引用路径或者CDN地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "[name]-[hash:5].bundle.js",
    chunkFilename: "[name]-[hash:5].chunk.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["app"]
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};
