const mongoose = require("mongoose");

const sessionSchema = require("../schemas/session").sessionSchema

const model = mongoose.model("SESSION", sessionSchema);

module.exports = {
  Session: model
};