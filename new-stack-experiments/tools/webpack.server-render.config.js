const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const path = require('path')
const rootDir = path.join(__dirname, '..')


const configCommon = require('./webpack.common.config')
const config = Object.assign({}, configCommon)
config.entry = [
    //client application entry point
    path.join(rootDir, 'src/client/serverEntry.js')
]
config.output = Object.assign({}, config.output)
config.output.filename= 'bundle.server-render.js'
config.output.libraryTarget= 'commonjs2'

module.exports = config

// module.exports = {
//     entry: [
//         //server rendering application entry point
//         path.join(rootDir, 'src/client/serverEntry.js')
//     ],
//     output: {
//         path: path.join(rootDir, 'dist'),
//         filename: 'bundle.server-render.js',
//         library: 'server-render-bundle',
//         libraryTarget: 'commonjs2'
//     } ,


//     // Enable sourcemaps for debugging webpack's output.
//     devtool: NODE_ENV === 'development' ? 'source-map' : 'source-map',
//     watch: NODE_ENV === 'development',    
//     watchOptions: {
//         aggregateTimeout: 1000
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
//         new webpack.NoErrorsPlugin()
//     ]    
// }