const Session = require("../models/session").Session;

function addAnswer(data, io, client) {
  Session.findOne({id: data.sessionId}, function(err, session) {
    const newQuestions = session.questions.map(function(question) {
      if (question.id === data.questionId) {
        return {
          ...question,
          answers: question.answers.map(function(answer) {
            if (answer.id === data.answerId) {
              answer.voteCount = answer.voteCount + 1
              return answer;
            }
            return answer;
          })
        }
      }
      return question;
    });
  
    session.save(function(err, session) {
      io.emit('playerAnswered', {
        questionId: data.questionId,
        answerId: data.answerId
      });
    });
  });
}

module.exports = {
  addAnswer
};