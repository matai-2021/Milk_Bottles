exports.up = (knex) => {
  return knex.schema.createTable("questions", (table) => {
    table.increments("id").primary();
    table.string("question");
    table.string("answer_A");
    table.string("answer_B");
    table.string("answer_C");
    table.string("answer_D");
    table.string("selected_answer");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("questions");
};
