exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        { id: 1, question_id: '1', answer: 'The Moon' },
        { id: 2, question_id: '1', answer: 'The Beach' },
        { id: 3, question_id: '1', answer: 'Mexico' },
        { id: 4, question_id: '1', answer: 'Somewhere with lots of dogs' },

        { id: 5, question_id: '2', answer: 'Murder documentary' },
        { id: 6, question_id: '2', answer: 'Animal documentary' },
        { id: 7, question_id: '2', answer: 'Shrek 2' },
        { id: 8, question_id: '2', answer: 'Romance' },

        { id: 9, question_id: '3', answer: 'Flight' },
        { id: 10, question_id: '3', answer: 'Invisibility' },
        { id: 11, question_id: '3', answer: 'Super speed' },
        { id: 12, question_id: '3', answer: 'The ability to foresee the Auckland housing market' },

        { id: 13, question_id: '4', answer: 'Bees' },
        { id: 14, question_id: '4', answer: 'Cola' },
        { id: 15, question_id: '4', answer: 'Orange' },
        { id: 16, question_id: '4', answer: 'Lemonade' },

        { id: 17, question_id: '5', answer: 'A hammock' },
        { id: 18, question_id: '5', answer: 'Flares' },
        { id: 19, question_id: '5', answer: 'A Breville Big Squeeze Slow Juicer' },
        { id: 20, question_id: '5', answer: 'A boat' }
      ])
    })
}
