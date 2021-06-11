const knex = require('knex')
const config = require('./kenxfile.js').development
const database = knex(config)

module.exports = {
  getQuestion

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
