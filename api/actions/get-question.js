const Question = require("../models/question").Question;

function getQuestion(data, res) {
  Question.findOne({id: data.id}, function(err, question) {
    res.send(question);
  });
}

module.exports = {
  getQuestion
};