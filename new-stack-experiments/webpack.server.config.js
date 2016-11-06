'use strict';
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [
        // polyfills
        'babel-polyfill', 
        'whatwg-fetch',
        // hot module entry point
        //'webpack-hot-middleware/client',
        //client application entry point
        './src/serverEntry.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.server.js',
        library: 'server-bundle',
        libraryTarget: 'commonjs2'
    } ,


    // Enable sourcemaps for debugging webpack's output.
    devtool: NODE_ENV === 'development' ? 'source-map' : 'source-map',
    watchOptions: {
        aggragateTimeout: 1000
    },

    resolve: {
        /* Add '.ts' and '.tsx' as resolvable extensions.
         Without this line you will have problems like this        
         'Module not found: Error: Cannot resolve 'file' or 'directory' ./MyComponent in \src\components'
         then importing files without extensions, for example using ./MyComponent instead ./MyComponent.tsx
         */
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
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
                    if(element.loader) return element.loader.split('!');
                    TypeError: element.loader.split is not a function 
                    means, that you use 'loader', instead of 'loaders'
                 */
            }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]    
}