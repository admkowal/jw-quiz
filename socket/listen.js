const io = require('socket.io')();

const addPlayer = require("../api/actions/add-player").addPlayer;
const addQuestion = require("../api/actions/add-question").addQuestion;

io.on('connection', (client) => {
  console.log('User connected');
  client.on('addPlayer', function(data) {
    addPlayer(data, io, client);
  });

  client.on('requestQuestion', function(data) {
    addQuestion(data, io, client);
  });

  client.on('disconnect', function(){
    console.log('User disconnected');
  });
});

const port = 8000;
io.listen(port);
console.log('Socket listening on port ', port);