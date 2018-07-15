/**
 * 1. webpack4下安装extract-text-webpack-plugin: npm install --save-dev extract-text-webpack-plugin@next
 * 2. CSS Tree Shaking: './src/css/base.css'中没有被使用的css样式不会被打包, 例如, .box-small
 */

const path = require("path");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractTextPlugin = new ExtractTextPlugin({
  filename: "[name].min.css",
  allChunks: false
});

let purifyCSS = new PurifyCSS({
  paths: glob.sync([
    // 要做CSS Tree Shaking的路径文件
    path.resolve(__dirname, "./*.html"),
    path.resolve(__dirname, "./src/*.js")
  ])
});

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          use: {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }
        })
      }
    ]
  },
  plugins: [extractTextPlugin, purifyCSS]
};
