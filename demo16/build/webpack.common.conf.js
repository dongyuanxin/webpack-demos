const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

const productionConfig = require("./webpack.prod.conf");
const developmentConfig = require("./webpack.dev.conf");

const generateConfig = env => {
  let scriptLoader = [
    {
      loader: "babel-loader"
    }
  ];
  let scssLoader = [
    {
      loader: "css-loader",
      options: {
        minimize: true,
        sourceMap: env === "development" ? true : false
      }
    },
    {
      loader: "sass-loader",
      options: { sourceMap: env === "development" ? true : false }
    }
  ];
  let styleLoader =
    env === "production"
      ? ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader"
          },
          use: scssLoader
        })
      : [
          {
            loader: "style-loader",
            options: { sourceMap: env === "development" ? true : false }
          }
        ].concat(scssLoader);

  return {
    entry: { app: "./src/app.js" },
    output: {
      publicPath: env === "development" ? "/" : __dirname + "/../dist/",
      path: path.resolve(__dirname, "../dist"),
      filename: "[name]-[hash:5].bundle.js",
      chunkFilename: "[name]-[hash:5].chunk.js"
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules)/, use: scriptLoader },
        { test: /\.scss$/, use: styleLoader }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html",
        chunks: ["app"],
        minify: {
          collapseWhitespace: true
        }
      }),
      new webpack.ProvidePlugin({ $: "jquery" })
    ]
  };
};

module.exports = env => {
  let config = env === "production" ? productionConfig : developmentConfig;
  return merge(generateConfig(env), config);
};
