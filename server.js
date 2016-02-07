/**
 * Created by Ale on 2/7/16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use('/js', express.static("public/js"));
app.use('/css', express.static("public/css"));
app.use('/images', express.static("public/images"));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + "/views/main.html");
});

app.get('/myprojects', function(req, res){
  res.sendFile(process.cwd() + "/views/myprojects.html");
});

app.get('/mygithub', function(req, res){
  res.sendFile(process.cwd() + "/views/mygithub.html");
});



app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});
