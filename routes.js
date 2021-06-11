const express = require('express')

const router = express.Router()
module.exports = router

// FILE TO DEFINE ROUTES

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/question/1', (req, res) => {
  const viewData = {
    questionid: 1,
    question: 'this is the question',
    answers: ['answer a', 'answer b', 'answer c', 'answer d']
  }
  console.log(viewData)
  res.render('question', viewData)
})
