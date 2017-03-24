var app = angular.module('app', ['ngRoute'] );
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/signin.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})