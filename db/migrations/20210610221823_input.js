exports.up = (knex) => {
  return knex.schema.createTable('input', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('questions.id')
    table.integer('selection')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('input')
}
