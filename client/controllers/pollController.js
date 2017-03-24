app.controller('pollController', function($scope,$location, pollFactory, $routeParams){
	$scope.id = $routeParams.id;
	pollFactory.getPolls(function(data){
		$scope.polls=data;
		console.log(data);
	})
	
	$scope.create = function(id, poll){
		if (!$scope.poll) {
			$scope.errors = [{message: 'Fields are required'}];
		}else{
			poll._id = id;	
			pollFactory.create(poll, function(data) {
				if (data.errors) {
		          		$scope.errors = data.errors;
		
			        } else {
			        	pollFactory.getPolls(function(data){
							$scope.polls=data;
							console.log(data);
							$location.url('/dashboard')
				     	})
				    }
							
				poll = {};
			});
			
		}
			
	}

	$scope.poll = {};
	function getPoll(id){
		pollFactory.showone(id, function(data){
		$scope.poll = data;
		});
	
	};
	$scope.vote = function(id, voteOption) {
		pollFactory.vote(id, voteOption, function(data) {
			pollFactory.showone(id, function(data){
				$scope.poll = data;
			});
		});
	}
	$scope.delete = function(id){
		pollFactory.delete(id, function(data){
			pollFactory.getPolls(function(data){
				$scope.polls=data;
				console.log(data);
				$location.url('/dashboard')
	     	})
		})
	}

	getPoll($scope.id);
})