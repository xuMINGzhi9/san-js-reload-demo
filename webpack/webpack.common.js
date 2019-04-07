/**
 * @file : webpack common
 * @author: xumingzhi
 * @date: 2019-04-07 23:17:29
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const threadPool = HappyPack.ThreadPool;
const happyThreadPool = threadPool({
    size: os.cpus().length
});
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        index: path.resolve('src/main.js')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('')
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[chunkhash:8].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src/index.html'),
            chunks: ['index']
        }),
        new HappyPack({
            id: 'js',
            verbose: false,
            loaders: [
                {
                    loader: 'babel-loader',
                    query: require(path.join(__dirname, '../config/babel.config.js'))
                }
            ],
            threadPool: happyThreadPool
        })
    ],
    output: {
        filename: isDev ? '[name].js' : '[name].[chunkhash].js',
        path: path.resolve('dist'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
            'san': 'san/dist/san.js'
        },
        modules: [
            path.resolve(''),
            path.resolve('node_modules'),
            path.join(__dirname, '../node_modules')
        ]
    },
    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /src\/components.*\.js$/,
                use: [
                    {
                        loader: 'san-js-reload-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: file => {
                    return /node_modules/.test(file);
                },
                use: [
                    {
                        loader: 'happypack/loader?id=js'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: isDev ? '[name].[ext]' : '[name]-[hash:5].[ext]',
                            publicPath: '/assets/images/'
                        }
                    }
                ]
            }
        ]
    }
};
