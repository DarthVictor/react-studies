const express = require('express')
const db = require('./db/data') 
const router = express.Router()


// define the home page route
router.get('/posts', function (req, res) {
  return res.json(db.posts)
})

module.exports = router