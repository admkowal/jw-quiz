const Session = require("../models/session").Session;

function getSessions(res) {
  Session.find(function(err, sessions) {
    res.send(sessions);
  });
}

module.exports = {
  getSessions
};