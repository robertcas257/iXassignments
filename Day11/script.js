var app = angular.module('movieAPI', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html',	
	})
	$routeProvider.when('/movie/:movieId', {
		controller: 'MovieCtrl',
		templateUrl: 'templates/movie.html',
	})
});

app.controller('MainCtrl', function($scope, $http) {

$scope.searchMovies = function() {

		$http({
			url:'http://www.omdbapi.com/?',
			method: 'GET',
			params: {
				s: $scope.searchItem
			}

		}).then(function(results){
			console.log(results);
			$scope.movies = results.data.Search;
		});
}

});

app.controller('MovieCtrl', function($scope, $http, $routeParams){
	$http({
		url: "http://www.omdbapi.com/?i=" + $routeParams.movieId + "&plot=short&r=json",
		method: "GET"
	}).then(function (results) {
		console.log(results);
		$scope.movie = results.data;

		$http({
			url: "http://api.giphy.com/v1/gifs/search",
			method: 'GET',
			params: {
				api_key: 'dc6zaTOxFJmzC',
				q: $scope.movie.Title
		}
		}).then(function (results) {
			console.log(results);
			$scope.gifs = results.data.data;
		})
	})

});