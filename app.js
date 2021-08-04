
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  };

  var day = today.toLocaleString("en-US", options);


  res.render('list', {
    kindOfDay : day,
    newListItems : items
  });

})

app.post("/", function(req, res) {
  res.redirect("/");
  var item = req.body.listItem;
  items.push(item);
  console.log(item);

})

app.listen(3000, function() {
  console.log("Running on port 3000");
})
