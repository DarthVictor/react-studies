'use strict';
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        // polyfills
        'babel-polyfill', 
        'whatwg-fetch',
        // hot module entry point
        'webpack-hot-middleware/client',
        //aplication entry point
        './src/entry.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    } ,


    // Enable sourcemaps for debugging webpack's output.
    devtool: NODE_ENV === 'development' ? 'source-map' : 'source-map',
    watch: NODE_ENV === 'development',    
    watchOptions: {
        aggragateTimeout: 1000
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
            },
            {
                test: /\.ts/,
                exclude: /(node_modules|bower_components)/,
                loaders:  ['babel-loader', 'ts-loader'] 
                /*
                ...\node_modules\webpack-core\lib\LoadersList.js:58                                                   
                    if(element.loader) return element.loader.split("!");
                    TypeError: element.loader.split is not a function 
                    means, that you use "loader", instead of "loaders"
                 */
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]    
}