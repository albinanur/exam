var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = (function(){
	return{

		add: function(req, res){
			var poll = new Poll({
				question : req.body.question,
				option1 : req.body.option1,
				option2 : req.body.option2,
				option3 : req.body.option3,
				option4 : req.body.option4,
				_user : req.body._id 
			});
			poll.save(function(err, data) {
				console.log(data);
				if (err) {
					res.json({errors: err.errors})
				} else {
					User.findOne({_id: req.body._id}, function(err, user){
						user._polls.push(data._id);
						user.save(function(err, userData){
							console.log(data);
							res.json(data);
						})
					})
				}
				
			})
		},

		show : function(req, res){
			Poll.find({})
			.populate('_user')
			.exec(function(err, polls){
				res.json(polls)
			})
		},

		showone : function(req, res){
			Poll.findOne({_id : req.params.id})
			.populate('_user')
			.exec(function(err, poll){
				res.json({poll: poll});
			})
			
		},
		vote : function(req, res){
			var selectionOption = req.query.vote_option;
			Poll.findOne({_id: req.params.id}, function(err, poll) {
				poll[selectionOption]++;
				poll.save(function(err, data) {
					res.json({poll: poll});
				})

			})


		},
		delete : function(req, res){
			Poll.remove({_id: req.params.id}, function(err) {
				if(!err) {
					res.json({result: 'success'})
				}
			})
		}
		
	}

})()