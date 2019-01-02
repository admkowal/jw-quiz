const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const api = require("./api");

const API_PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/session', function (req, res) {
  api.createSession(req.body, res);
})

app.listen(API_PORT, function() {
  console.log("Serwer został uruchomiony pod adresem http://localhost:" + API_PORT);
});