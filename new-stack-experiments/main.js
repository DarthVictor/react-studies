'use strict'
require('babel-polyfill')
require('whatwg-fetch')
const express = require('express')
const util = require('util')
const path = require('path')
const webpack = require('webpack')

// Express init
const app = express()

//Webpack hot module reloading
// Client HMR
// const config = require('./webpack.client.config')
// const compiler = webpack(config)
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

// Server HMR
//const reload = require('require-reload')(require);
// let renderPath;
// const configServerRender = require('./webpack.server-render.config')
// const compilerServerRender = webpack(configServerRender)
// compilerServerRender.watch({}, function(err, stats) {
//     if(require.resolve('./dist/bundle.server-render')){
//         delete require.cache[require.resolve('./dist/bundle.server-render')]
//     }        
//     renderPath = require ('./dist/bundle.server-render').default
// });

// app.get('/', function(req, res) {
//     res.send(renderPath());
// })


// Server API 
const configServer = require('./webpack.server.config')
const compilerServer = webpack(configServer)
compilerServer.watch({}, function(err, stats) {
     if(require.resolve('./dist/bundle.server')){
         delete require.cache[require.resolve('./dist/bundle.server')]
     }  
     app.use('/api', require('./dist/bundle.server').default)
})


// Express run
const port = 3000 
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    else {
        console.log('App running on port ' + port + '!')
    }
})