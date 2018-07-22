/**
 * 1. webpack-dev-server: 配置 devServer 选项
 * 2. SourceMap: 配置 devtool 选项( 不同的loader也应该打开对应的sourcemap选项 )
 * 3. 设置代理: devServer.proxy 进行跨域代理设置
 * 4. 路由 rewrite: devServer.historyApiFallback
 * 5. 模块热更新: HotModuleReplacementPlugin && NamedModulesPlugin, 更多请见 './app.js'
 */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash:5].bundle.js",
    chunkFilename: "[name]-[hash:5].chunk.js"
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
