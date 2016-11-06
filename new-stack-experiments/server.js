'use strict'
const express = require('express')
const util = require('util')
const path = require('path')

const config = require('./webpack.config')
const webpack = require('webpack')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const renderPath = require ('./dist/bundle.server').default
// Express init
const app = express()

//Webpack hot module reloading
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// Express run
const port = 3000 

app.get('/', function(req, res) {
    res.send(renderPath());
});
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    else {
        console.log('App running on port ' + port + '!')
    }
})