const webpack = require("webpack");

const path = require("path");

module.exports = {
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
