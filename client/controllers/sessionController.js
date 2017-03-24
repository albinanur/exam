app.controller('sessionController', function($scope,$location, sessionFactory){

	sessionFactory.checkStatus(function(data){
		$scope.curUser=data;
	})
	$scope.login = function(){
		if (!$scope.user) {
			$scope.errors = [{message: 'Username is required'}];
		} else {
			sessionFactory.login($scope.user, function(dataFromFactory) {
				if (dataFromFactory.errors) {
	          		$scope.errors = dataFromFactory.errors;
	          		$location.url('/');
		          } else {
		          	$location.url('/dashboard');	
		          }
			});	
		}
	}
})