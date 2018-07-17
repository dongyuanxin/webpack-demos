/**
 * 第三方JS库
 * 1. CDN: '<script></script>'标签引入即可
 * 2. npm包管理: ProvidePlugin, 键是变量名, 值是第三方库名称
 * 3. 本地Js文件: alias别名, 将本地库解析到对应的文件中. 例如示例中的 'jQuery'被解析到'src/vendor/jquery.min.js'
 *
 * 配置之后, 在项目的文件中不再需要import或者require相关的库!!!
 *
 * 被注册后的变量请看 'src/app.js'
 */

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    alias: {
      jQuery$: path.resolve(__dirname, "src/vendor/jquery.min.js")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery", // npm
      jQuery: "jQuery" // 本地Js文件
    })
  ]
};
