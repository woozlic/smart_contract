const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {template} = require("lodash");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }
    )],
};