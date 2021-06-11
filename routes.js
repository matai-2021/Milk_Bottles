const express = require('express')
const { getQuestion, updateAnswer, getAllAnswers } = require('./db/db')
const { getResult } = require('utils')

const router = express.Router()
module.exports = router

let currentQuestion = 1
let score = 0
let currentAnswers = []

// FILE TO DEFINE ROUTES

router.get('/', async (req, res) => {
  res.render('home')
})

router.get('/question', async (req, res) => {
  try {
    if (currentQuestion >= 6) {
      const viewData = getResult(score)
      viewData.answers = await getAllAnswers
      console.log(viewData)
      res.render('result', getResult(score))
    } else {
      const viewData = await getQuestion(currentQuestion)
      currentAnswers = viewData.answers
      res.render('quesiton', await getQuestion(currentQuestion))
    }
  } catch (error) {
    console.error(error.message)
  }
})

router.post('/question', async (req, res) => {
  try {
    updateAnswer(currentAnswers, currentQuestion)
    currentQuestion++
    score += req.body.answer
    res.redirect('/question')
  } catch (error) {
    console.error(error.message)
  }
})
