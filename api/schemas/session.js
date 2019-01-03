const mongoose = require("mongoose");
const shortid = require("shortid");

const schema = new mongoose.Schema({
  name: String,
  id: {
    type: String,
    default: shortid.generate
  },
  players: [{
    name: String,
    isAdmin: Boolean,
    id: {
      type: String,
      default: shortid.generate
    }
  }],
  questions: [{
    question: String,
    id: {
      type: String,
      default: shortid.generate
    },
    answers: [{
      answer: String,
      id: {
        type: String,
        default: shortid.generate
      },
      isCorrect: Boolean,
      voteNumber: Number
    }]
  }]
});

module.exports = {
  sessionSchema: schema
};