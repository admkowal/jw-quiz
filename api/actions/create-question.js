const Question = require("../models/question").Question;

function createQuestion(data, res) {
  const newQuestion = new Question(data);

  newQuestion.save(function(err, question) {
    res.send(question);
  });
}

module.exports = {
  createQuestion
};