const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:5M6LqazZxc*@ds013559.mlab.com:13559/jw-quiz", {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));
