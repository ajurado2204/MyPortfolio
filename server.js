/**
 * Created by Ale on 2/7/16.
 */
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));

// routes ==================================================
require('./app/routes')(app); // configure our routes


app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});


exports = module.exports = app;