const Question = require("../models/question").Question;

function editQuestion(data, res) {
  Question.findOneAndUpdate({id: data.id}, data, function(err, question) {
    question.save(function(err, question) {
      res.send(question);
    });
  });
}

module.exports = {
  editQuestion
};