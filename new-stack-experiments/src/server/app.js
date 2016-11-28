import express from 'express'
import db from './db/data'
const router = express.Router()


// define the home page route
router.get('/posts', (req, res) =>{
  return res.json(db.posts)
})
router.get('/comments2', (req, res) =>{
  return res.json(db.comments)
})
export default router