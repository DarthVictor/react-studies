'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: ['babel-polyfill', './src/entry.js'],
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
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015'],                    
                    plugins: ['transform-async-to-generator']
                }
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader' 
            }
        ]
    }   
}