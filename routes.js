const express = require("express");

const router = express.Router();
module.exports = router;

// FILE TO DEFINE ROUTES

router.get("/", (req, res) => {
  res.render("home");
});

const data = {
  question: 'string',
  answers: [
    '', '', '', ''
  ]
}

returningData = {
  questionId = 0,
  userSelection = 2
}