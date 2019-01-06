const Session = require("../models/session").Session;

function getSession(data, res) {
  Session.findOne({id: data.id}, function(err, session) {
    res.send(session);
  });
}

module.exports = {
  getSession
};