const Session = require("../models/session").Session;

function createSession(data, res) {
  const newSession = new Session({name: data.name});
  newSession.save(function(err, session) {
    res.send(session);
  });
}

module.exports = {
  createSession
};