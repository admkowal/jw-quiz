const Question = require("../models/question").Question;
const Session = require("../models/session").Session;
const mapToID = require("../utils/array").mapToID

function addQuestion(data, io, client) {
  Session.findOne({id: data.sessionId}, function(err, session) {
    const oldQuestionsIds = mapToID(session.questions);
  

    Question.find(function(err, questions) {
      const matches = questions.filter(function(question) {
        return !oldQuestionsIds.includes(question.id);
      });

      if (matches.length > 0) {
        const matchQuestion = matches[0];
    
        session.questions = [
          matchQuestion,
          ...session.questions
        ];

        session.save(function(err, session) {
          io.emit('newQuestion', matchQuestion);
        });
      }
    });
  });
}

module.exports = {
  addQuestion
};