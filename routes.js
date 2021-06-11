const express = require('express')
const { getQuestion, updateAnswer, dropUserTable } = require('./db/db')
const { getResult, getAnswersArr } = require('./utils')

const router = express.Router()
module.exports = router

let currentQuestion = 1
let score = 0
let currentAnswers = []

// FILE TO DEFINE ROUTES

router.get('/', async (req, res) => {
  try {
    await dropUserTable()
    currentQuestion = 1
    score = 0
    res.render('home')
  } catch (error) {
    console.error(error.message)
  }
})

router.get('/question', async (req, res) => {
  try {
    if (currentQuestion >= 6) {
      const viewData = getResult(score)
      viewData.answers = await getAnswersArr()
      console.log(viewData)
      res.render('result', viewData)
      await dropUserTable()
      currentQuestion = 1
      score = 0
    } else {
      const viewData = await getQuestion(currentQuestion)
      currentAnswers = viewData.answers
      res.render('question', await getQuestion(currentQuestion))
    }
  } catch (error) {
    console.error(error.message)
  }
})

router.post('/question', async (req, res) => {
  try {
    console.log('current answer: ', currentAnswers[Number(req.body.answer)])

    const result = await updateAnswer(currentAnswers[Number(req.body.answer)], currentQuestion)
    console.log(result)
    currentQuestion++
    score += Number(req.body.answer)
    console.log(score)
    res.redirect('/question')
  } catch (error) {
    console.error(error.message)
  }
})
