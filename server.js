/**
 * Created by Ale on 2/7/16.
 */
var express = require('express');
var GitHubApi = require('node-github')
var bodyparser = require('body-parser');
var session = require('express-session');

var app = express();
var PORT = process.env.PORT || 8080;


app.use(session({
    secret: 'crazy secret boom!!',
    cookie: {
      maxAge: 60000
    },
    saveUninitialized:true,
    resave: false
  }
));

app.use(bodyparser.urlencoded({extended:false}));


function middleware(req,res,next){
  var sess = req.session;

  if(sess.authenticated === undefined || sess.authenticated === false){
    res.redirect("/");
  }

  next();
}

app.use('/js', express.static("public/js"));
app.use('/css', express.static("public/css"));
app.use('/images', express.static("public/images"));

app.post('/login', function(req,res){

  console.log("HELLO");
  if(req.body.email.length === 0 || req.body.password.length === 0) {
    req.session.authenticated = false;
    res.redirect("/");
  } else if(req.body.email.length === 0 && req.body.password.length === 0) {
    req.session.authenticated = false;
    res.redirect("/");
  } else {
    req.session.authenticated = true;
    res.redirect("/dashboard");
  }

});

app.get('/', function(req, res){
  res.sendFile(process.cwd() + "/views/main.html");
});

app.get('/login', function(req,res){
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get('/myprojects', function(req, res){
  res.sendFile(process.cwd() + "/views/myprojects.html");
});

app.get('/mygithub', function(req, res){
  res.sendFile(process.cwd() + "/views/mygithub.html");
});

app.get('/dashboard', middleware, function(req,res){
  res.sendFile(process.cwd() + "/views/dashboard.html")
});

app.get("/logout", middleware, function(req, res) {
  req.session.authenticated = false;
  res.redirect("/");
});

app.get('/dashboard/:githubuname', function(req, res) {
  var github = new GitHubApi({
    version: "3.0.0"
  });

  github.user.getFrom({
    user: req.params.githubuname
  }, function(err, gitResponse){
    res.send(JSON.stringify(gitResponse));
  });
});

app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});
