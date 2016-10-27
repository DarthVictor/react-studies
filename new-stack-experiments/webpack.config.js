'use strict';
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch','./src/entry.js'],
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
                test: /\.ts$/,
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
    }
    // ,plugins : [
    //     new webpack.ProvidePlugin({
    //         'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
    //         'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    //     })
    // ]
}