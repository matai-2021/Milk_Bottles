exports.up = (knex) => {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary()
    table.string('question')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('questions')
}
