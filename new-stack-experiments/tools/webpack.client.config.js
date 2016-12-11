const webpack = require('webpack')
const util = require('util')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const path = require('path')
const rootDir = path.join(__dirname, '..')


const configCommon = require('./webpack.common.config')
const config = Object.assign({}, configCommon)
config.entry = [
    // hot module entry point
    'webpack-hot-middleware/client',
    //client application entry point
    path.join(rootDir, 'src/client/clientEntry.js')
]
config.output = Object.assign({}, config.output)
config.output.filename= 'bundle.client.js'
config.output.publicPath = '/dist/'
config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(config.plugins)

module.exports = config
// module.exports = {
//     entry: [
//         // hot module entry point
//         'webpack-hot-middleware/client',
//         //client application entry point
//         path.join(rootDir, 'src/client/clientEntry.js')
//     ],
//     output: {
//         path: path.join(rootDir, 'dist'),
//         filename: 'bundle.client.js',
//         publicPath = '/dist/'
//     } ,


//     // Enable sourcemaps for debugging webpack's output.
//     devtool: NODE_ENV === 'development' ? 'source-map' : 'source-map',
//     watch: NODE_ENV === 'development',    
//     watchOptions: {
//         aggragateTimeout: 1000
//     },

//     resolve: {
//         /* Add '.ts' and '.tsx' as resolvable extensions.
//          Without this line you will have problems like this        
//          'Module not found: Error: Cannot resolve 'file' or 'directory' ./MyComponent in \src\components'
//          then importing files without extensions, for example using ./MyComponent instead ./MyComponent.tsx
//          */
//         extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
//     },

//     module: {
//         loaders: [
//             { test: /\.css$/, loader: 'style!css' },
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: 'babel',
//             },
//             {
//                 test: /\.ts/,
//                 exclude: /(node_modules|bower_components)/,
//                 loaders:  ['babel-loader', 'ts-loader'] 
//                 /*
//                 ...\node_modules\webpack-core\lib\LoadersList.js:58                                                   
//                     if(element.loader) return element.loader.split('!');
//                     TypeError: element.loader.split is not a function 
//                     means, that you use 'loader', instead of 'loaders'
//                  */
//             }
//         ]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin()
//     ]    
// }