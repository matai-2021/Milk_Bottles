exports.up = (knex) => {
  return knex.schema.createTable('answers', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('questions.id')
    table.string('answer')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('answers')
}
