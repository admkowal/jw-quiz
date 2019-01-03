const Session = require("../models/session").Session;

function addPlayer(data, io, client) {
  Session.findOne({id: data.sessionId}, function(err, session) {
    session.players = [
      { name: data.params.name },
      ...session.players
    ];
  
    session.save(function(err, session) {
      console.log(session);
      const newPlayer = session.players[0];
      io.emit('playerAdded', newPlayer);
      client.emit('newPlayer', newPlayer);
    });
  });
}

module.exports = {
  addPlayer
};