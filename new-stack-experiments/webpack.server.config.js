const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const fs = require('fs');
let nodeModules = {};

// note the path.resolve(__dirname, ...) part
// without it, eslint-import-resolver-webpack fails
// since eslint might be invoked with different cwd
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; })
module.exports = {
    entry: [
        //server application entry point
        './src/server/app.js'
    ],

    target: 'node',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.server.js',
        libraryTarget: 'commonjs2'
    },
    externals: nodeModules,


    // Enable sourcemaps for debugging webpack's output.
    devtool: NODE_ENV === 'development' ? 'source-map' : 'source-map',
    watch: NODE_ENV === 'development',    
    watchOptions: {
        aggregateTimeout: 1000
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
        new webpack.NoErrorsPlugin()
    ]    
}