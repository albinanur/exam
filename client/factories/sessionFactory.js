app.factory('sessionFactory', function($http, $location){
	var factory = {};
	factory.login = function(user,callback){
		console.log(user);
		$http.post('/login',user).then(function(output){
			callback(output.data);
		})
	}
	factory.checkStatus = function(callback){
		$http.get('/checkStatus').then(function(output){
			if(!output.data){
				$location.url('/')
			}else{
				callback(output.data)
			}

		})
	}
	return factory;
})