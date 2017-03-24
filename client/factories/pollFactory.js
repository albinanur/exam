app.factory('pollFactory', function($http){
	var factory = {};
	var polls = [];
	factory.create = function(poll,callback){
		console.log(poll);
		$http.post('/polls/add',poll).then(function(output){
			polls.push(output.data);
			callback(output.data);
		})
	}
	factory.getPolls = function(callback){
		$http.get('/polls').then(function(output){
			callback(output.data)
		})
	}
	factory.showone = function(id,callback){
		$http.get('/polls/' + id).then(function(output){
			callback(output.data.poll);
		});
	}
	factory.vote = function(id, voteOption, callback) {
		$http.get('/polls/' + id + '/vote?vote_option='+voteOption).then(function(output){
			callback(output.data.poll);
		});
		
	}

	factory.delete = function(id, callback){
		$http.get('/polls/' + id + '/delete').then(function(output){
			callback(output.data.poll);
		});
	}
	return factory;
})