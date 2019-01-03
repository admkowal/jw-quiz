const mongoose = require("mongoose");

const questionSchema = require("../schemas/question").questionSchema

const model = mongoose.model("QUESTION", questionSchema);

module.exports = {
  Question: model
};