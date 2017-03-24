var user = require('./../controllers/users.js');
var poll = require('./../controllers/polls.js');


module.exports = function(app){
	app.post('/login', function(req, res){
		user.login(req, res);
	})
	app.get('/checkStatus', function(req, res){
		user.checkStatus(req, res)
	})
	app.get('/logout', function(req, res){
		user.logout(req, res)
	})
	//**********************
	app.get('/polls', function(req, res){
		poll.show(req, res)
	})
	app.post('/polls/add', function(req, res){
		poll.add(req, res);
	})
	app.get('/polls/:id/vote', function(req, res){
		poll.vote(req, res)
	})
	app.get('/polls/:id', function(req, res){
		poll.showone(req, res)
	})
	app.get('/polls/:id/delete', function(req, res){
		poll.delete(req, res)
	})
	
}