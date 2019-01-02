const SESSION = require("../schemas/session").SESSION;

function createSession(data, res) {
  const newSESSION = new SESSION({name: data.name});
  newSESSION.save(function(err, session) {
    res.send(session);
  });
}

module.exports = {
  createSession
};