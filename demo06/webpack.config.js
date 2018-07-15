/**
 * 此处写法是单独抽离样式表，更多请查阅: https://www.webpackjs.com/plugins/extract-text-webpack-plugin/
 * webpack4下安装extract-text-webpack-plugin: npm install --save-dev extract-text-webpack-plugin@next
 */
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader"
          },
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].min.css",
      allChunks: false
    })
  ]
};
