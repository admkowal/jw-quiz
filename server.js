require("./socket/listen");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const api = require("./api");

const API_PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/session', function(req, res) {
  api.createSession(req.body, res);
})

app.get('/api/get-sessions', function(req, res) {
  api.getSessions(res);
})

app.get('/api/get-session', function(req, res) {
  api.getSession(req.query, res);
})

app.listen(API_PORT, function() {
  console.log("Serwer został uruchomiony pod adresem http://localhost:" + API_PORT);
});