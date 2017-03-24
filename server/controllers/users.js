var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');


module.exports = (function(){
	return{
		
		login : function(req, res){
			var username = req.body.username.toLowerCase();
			User.findOne({username: username},function(err, data){
				if(!data){
					var user = new User({
						username: username,
					});
					user.save(function(err, data){
						if (err) {
							console.log(err);
							res.json({errors: err.errors});
						} else {
							req.session.user = data;
							req.session.save()
							res.json(data);	
						}
					})
				}else{
					req.session.user = data;
					req.session.save()
					res.json(data);
				}
			})
		},
		checkStatus: function(req, res){
			if(req.session.user){
				res.json(req.session.user)
			}else{
				res.json(null)
			}
		},
		logout: function(req, res){
			req.session.destroy();
			res.redirect('/');
		},
		
	}

})()