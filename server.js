var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser');
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
var port = 8000;
app.use(bp.json());
app.use(express.static(path.join(__dirname + '/client')));
app.use( express.static( path.join(__dirname, './bower_components' )));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)


app.listen(port, function(){
	console.log('listening on port 8000');
})