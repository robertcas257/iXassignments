var app = angular.module('nyTimesAPI', []);

var NY_TIMES_API_KEY = "0235d294e5f24eac95b28a7360187aa9";

app.controller('nyTimesSearch', function($scope, $http){

$scope.searchNY = function() {

	$http({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		method: 'GET',
		params: {
			apikey: NY_TIMES_API_KEY,
			q: $scope.searchItem,
			end_date: 20120812
		}
	}).then(function(results){
		console.log(results);
		$scope.articles = results.data.response.docs;
	});


}


});

