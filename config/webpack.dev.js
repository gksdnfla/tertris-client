const path = require('path');

// Webkpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tetris',
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        server: 'http',
        port: 3000,
        hot: true
    }
}