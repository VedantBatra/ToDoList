
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {

  var d = new Date();
  var day = d.getDay();

  var resDay = "";

  if(d == 6 || d == 0) {
    resDay = "Weekend";
  }
  else {
    resDay = "Weekday";
  }

  res.render('list', {
    kindOfDay : resDay
  });

})

app.listen(3000, function() {
  console.log("Running on port 3000");
})
