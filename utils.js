function getResult (score) {
  let result = {}
  if (score => 0 && score <= 3) {
    result = {
      name: 'Pineappple Lump',
      img: 'images/pineapple.jpg'
    }
  } else if (score => 4 && score <= 7) {
    result = {
      name: 'Cherry Ripe',
      img: 'images/cherry.jpg'
    }
  } else if (score => 8 && score <= 11) {
    result = {
      name: 'Sour Peach',
      img: 'images/peach.jpg'
    }
  } else if (score => 11 && score <= 15) {
    result = {
      name: 'Milk Bottle',
      img: 'images/milk.jpg'
    }
  }
  return result
}

module.exports = {
  getResult
}