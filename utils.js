const { getAllAnswers } = require('./db/db')

function getResult (input) {
  const score = input
  if (score > -1 && score < 4) {
    console.log('IN LUMP')

    return {
      name: 'Pineappple Lump',
      img: 'images/pineapple.jpg'
    }
  } else if (score > 3 && score < 8) {
    console.log('IN RIPE')

    return {
      name: 'Cherry Ripe',
      img: 'images/cherry.jpg'
    }
  } else if (score > 7 && score < 12) {
    console.log('IN PEACH')

    return {
      name: 'Sour Peach',
      img: 'images/peach.jpg'
    }
  } else if (score > 10 && score < 16) {
    console.log('IN MILK')

    return {
      name: 'Milk Bottle',
      img: 'images/milk.jpg'
    }
  }
}

async function getAnswersArr () {
  const allAnswers = await getAllAnswers()
  const returnArr = []
  for (let i = 0; i < allAnswers.length; i++) {
    returnArr.push(Object.values(allAnswers[i])[0])
  }
  return returnArr
}

module.exports = {
  getResult,
  getAnswersArr
}
