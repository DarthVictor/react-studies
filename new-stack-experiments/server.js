'use strict'
const express = require('express')
const config = require('./webpack.config')
const webpack = require('webpack')
const compiler = webpack(config)
const util = require('util')
const path = require('path')

// compiler.run((err, data) => {
//     // /console.log(util.inspect(err, {showHidden: false, depth: null}))
// })


const port = 3000
const app = express()
app.use(express.static('dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port, () => {
    console.log('App running on port ' + port + '!')
})