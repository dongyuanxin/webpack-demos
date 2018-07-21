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
  ].concat(
    env === "production"
      ? []
      : [
          {
            loader: "eslint-loader"
          }
        ]
  );
  let cssLoaders = [
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
          use: cssLoaders
        })
      : [
          {
            loader: "style-loader",
            options: { sourceMap: env === "development" ? true : false }
          }
        ].concat(cssLoaders);
  return {
    entry: { app: "./app.js" },
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "dist"),
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
      new ExtractTextPlugin({
        filename: "[name].min.css",
        allChunks: false
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html",
        chunks: ["app"],
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  };
};

module.exports = env => {
  let config = env === "production" ? productionConfig : developmentConfig;
  return merge(generateConfig(env), config);
};
