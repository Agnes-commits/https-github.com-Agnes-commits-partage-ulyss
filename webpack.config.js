const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname,'./src/index.js'),
        port: 3000,
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/favicon.ico",
            template: './src/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    output: {
        path: path.resolve(__dirname,'./src/bundle.min.js'),
        filename: 'bundle.min.js'
    }

}