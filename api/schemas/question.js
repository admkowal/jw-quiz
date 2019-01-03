const mongoose = require("mongoose");
const shortid = require("shortid");

const schema = new mongoose.Schema({
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
});

module.exports = {
  questionSchema: schema
};