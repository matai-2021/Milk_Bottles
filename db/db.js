const knex = require('knex')
const config = require('./kenxfile.js').development
const database = knex(config)

module.exports = {
  getQuestion,
  updateAnswer,
  getAllAnswers
}

function getQuestion (id, db = database) {
  return db('questions')
    .join('answers', 'questions.id', 'answers.question_id')
    .where('questions.id', id)
    .select('questions.id as id', 'questions.question as question', 'answers.answer as answer')
    .then(result => {
      const arr = []
      for (let i = 0; i < result.length; ++i) {
        arr.push(result[i].answer)
      }
      return {
        id: result[0].id,
        question: result[0].question,
        answers: arr
      }
    })
}

function updateAnswer (answer, questionId, db = database) {
  return db('input')
    .insert({ question_id: questionId, selection: answer })
}

function getAllAnswers (db = database) {
  return db('input').select('selection')
}
