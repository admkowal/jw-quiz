require("./mongoose");

module.exports = {
  createSession: require("./actions/create-session").createSession,
  getSessions: require("./actions/get-sessions").getSessions
};