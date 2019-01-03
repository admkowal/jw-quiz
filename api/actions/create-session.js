const Session = require("../models/session").Session;
const Question = require("../models/question").Question;

const questions = [{
  "question": "Dlaczego mężczyzna jest głową żony?",
  "answers": [
    { "answer": "Ma lepsze predyspozycje", "isCorrect": "false", "voteNumber": "0" },
    { "answer": "Został stworzony pierwszy", "isCorrect": "true", "voteNumber": "0" },
    { "answer": "Jest ważniejszy", "isCorrect": "false", "voteNumber": "0" },
    { "answer": "Mężczyźni są lepszymi organizatorami", "isCorrect": "false", "voteNumber": "0" }
  ]
}];

function createSession(data, res) {
  // questions.forEach(function(question) {
  //   const newQuestion = new Question(question);
  //   newQuestion.save();
  // });

  const newSession = new Session({
    name: data.name,
    players: [
      { name: data.username, isAdmin: true }
    ]
  });

  newSession.save(function(err, session) {
    res.send(session);
  });
}

module.exports = {
  createSession
};