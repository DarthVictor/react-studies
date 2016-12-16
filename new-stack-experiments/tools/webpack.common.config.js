const webpack = require('webpack')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const rootDir = path.join(__dirname, '..')

module.exports = {
    entry: [],
    output: {
        path: path.join(rootDir, 'dist'),
    } ,


    // Enable sourcemaps for debugging webpack's output.
    devtool: isDevelopment ? 'source-map' : 'source-map',
    watch: isDevelopment,    
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
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
            },
            {
                test: /\.tsx?$/,
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
    plugins: [new webpack.NoErrorsPlugin()]    
}