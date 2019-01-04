require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const api = require("./api");
const addPlayer = require("./api/actions/add-player").addPlayer;
const addQuestion = require("./api/actions/add-question").addQuestion;
const addAnswer = require("./api/actions/add-answer").addAnswer;

const API_PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(API_PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.post('/api/session', function(req, res) {
  api.createSession(req.body, res);
})

app.get('/api/get-sessions', function(req, res) {
  api.getSessions(res);
})

app.get('/api/get-session', function(req, res) {
  api.getSession(req.query, res);
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

io.on('connection', (client) => {
  console.log('User connected');
  client.on('addPlayer', function(data) {
    addPlayer(data, io, client);
  });

  client.on('requestQuestion', function(data) {
    addQuestion(data, io, client);
  });

  client.on('emitAnswer', function(data) {
    addAnswer(data, io, client);
  });

  client.on('disconnect', function(){
    console.log('User disconnected');
  });
});