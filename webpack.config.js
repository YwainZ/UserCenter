const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  },
  devtool: "inline-source-map", //使用inline-source-map 追踪到错误和警告在源代码中的原始位置
  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
    hot: true,
    port: 7300,
    host: "0.0.0.0"
  }, // 热更新
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
