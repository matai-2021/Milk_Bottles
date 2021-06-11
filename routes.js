const express = require('express')
const database = require('./db/db')

const router = express.Router()
module.exports = router

let currentQuestion = 1

// FILE TO DEFINE ROUTES

router.get('/', async (req, res) => {
  try {
    res.render('home', await database.getQuestion(currentQuestion))
  } catch (error) {
    console.error(error.message)
  }
})
