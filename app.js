
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {
  res.send("Hello World");
})

app.listen(3000, function() {
  console.log("Running on port 3000");
})
