/**
 * babel-loader: 负责es6语法转化
 * babel-preset-env: 包含es6、7等版本的语法转化规则
 * babel-polyfill: es6内置方法和函数转化垫片
 * babel-plugin-transform-runtime: 避免polyfill污染全局变量
 * 更多资料：
 * polyfill引入：https://www.babeljs.cn/docs/usage/polyfill/
 * babel-preset-env配置：https://www.babeljs.cn/docs/plugins/preset-env/
 */
module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader" // 转化需要的loader
          // options选项配置在: .babelrc
          // options: {
          //   ...
          // }
        }
      }
    ]
  }
};
