const path = require('path');
// const HTMLWebpackPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        catalog: './js/catalog.js',
        cart: './js/cart.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // new HTMLWebpackPlugins({
        //     filename: 'index.html',
        //     template: './index.html',
        // }),
        // new HTMLWebpackPlugins({
        //     filename: 'cart.html',
        //     template: './cart.html',
        // }),
        new CleanWebpackPlugin(),
    ],
}