exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { id: 1, question: 'Where would you rather holiday?' },
        { id: 2, question: 'Your browsing Netflix, which category do you choose?' },
        { id: 3, question: 'If you had a superpower, what would it be?' },
        { id: 4, question: 'Pick you favourite flavour of soda:' },
        { id: 5, question: 'Your stranded on a desert island, what do you bring:' }
      ])
    })
}
