var app = angular.module('app', ['ngRoute'] );
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/signin.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/create',{
		templateUrl: 'partials/createpoll.html'
	})
	.when('/poll/:id',{
		templateUrl: 'partials/showone.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})