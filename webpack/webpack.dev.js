/**
 * @file : webpack dev
 * @author: xumingzhi
 * @date: 2019-04-07 23:18:48
 */
process.env.NODE_ENV = 'development'; // 表明是开发环境
const webpack = require('webpack');
const path = require('path');
const merage = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.common.js');
const {
    port = '8080',
    proxy = {},
    open = true,
    hot = true,
    hotOnly = false,
    devtool = 'inline-source-map'
} = {};

module.exports = merage.smart(common, {
    mode: 'development', // 表明是开发环境
    devtool: devtool,
    devServer: {
        contentBase: path.resolve('dist'), // 将dist 目录下的文件作为可访问的文件
        port: port, // 端口 默认 8080
        open: open, // 是否自动打开浏览器 默认 是
        hot: hot, // 是否启用模块热替换 默认 是  // 需使用 webpack.HotModuleReplacementPlugin
        hotOnly: hotOnly, // 无需刷新热更新
        quiet: true,
        host: '0.0.0.0'
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}, {});
