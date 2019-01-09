const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
    },
    devtool: 'inline-source-map', //使用inline-source-map 追踪到错误和警告在源代码中的原始位置
    devServer: {
        historyApiFallback: true,
        contentBase: './build',
        hot: true,
      }, // 热更新
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        },{
            test: /\.(css|sass|less)$/,
            use: ['css-loader', 'style-loader']
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './build/index.html', // 生成的文件依赖html文件
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
}