/**
 * @file : babel.config
 * @author: xumingzhi@baidu.com
 * @date: 2019-04-07 23:18:30
 */
const path = require('path');
module.exports = {
    filename: path.join(__dirname, '../config/babel.config.js'),
    presets: [
        '@babel/preset-env'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-proposal-decorators', {
            legacy: true
        }]
    ]
};
