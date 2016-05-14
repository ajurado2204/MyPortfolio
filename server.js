/**
 * Created by Ale on 2/7/16.
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT | 8080;

app.use(bodyParser.urlencoded({extend: false}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*',function(req, res){
  console.log('In index.html');
  res.sendFile(__dirname + '/public/view/index.html');
});

app.listen(PORT, function(req, res){
  console.log("Listening to port %s", PORT);
});