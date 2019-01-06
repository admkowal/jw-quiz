require("./mongoose");

module.exports = {
  getSession: require("./actions/get-session").getSession,
  getSessions: require("./actions/get-sessions").getSessions,
  getQuestion: require("./actions/get-question").getQuestion,
  editQuestion: require("./actions/edit-question").editQuestion,
  createSession: require("./actions/create-session").createSession,
  createQuestion: require("./actions/create-question").createQuestion
};