const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    publicPath: "/", // js引用路径或者CDN地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "[name]-[hash:5].bundle.js",
    chunkFilename: "[name]-[hash:5].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    hot: true,
    overlay: true,
    proxy: {
      "/comments": {
        target: "https://m.weibo.cn",
        changeOrigin: true,
        logLevel: "debug",
        headers: {
          Cookie: ""
        }
      }
    }
    // historyApiFallback: {
    //   rewrites: [
    //     // {
    //     //   from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
    //     //   to: function(ctx) {
    //     //     return "/" + ctx.match[1] + ctx.match[2] + ".html";
    //     //   }
    //     // },
    //     {
    //       from: /./,
    //       to: "dist/index.html"
    //     }
    //   ]
    // }
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["app"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};
