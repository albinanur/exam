var user = require('./../controllers/users.js');


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
	
}