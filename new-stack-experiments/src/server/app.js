import express from 'express'
import db from './db/data'
const router = express.Router()


// define the home page route
router.get('/posts', function (req, res) {
  return res.json(db.posts)
})

export default router