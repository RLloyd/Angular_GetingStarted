/**
 * Created by Odee on 6/1/15.
 */
'use strict';

var app = angular.module("ghViewerApp", []);

app.controller("ControllerBasics", ["$scope", "$http", function ($scope, $http) {

	$scope.title = "GitHub Viewer";
	$scope.shortBlurb;// = something;


	var onRepos = function(response){
		$scope.repos = response.data;
	};

	var onUserComplete = function (response) {
		$scope.user = response.data;
		//$scope.login = response.data;
		$http.get($scope.user.repos_url)
			.then(onRepos, onError);
		console.log("response.data: ", response.data);

		if($scope.user){
			$scope.shortBlurb = "John poot poot, napaka pilyong bata. Gusto nya sya masunod palagi. But he's also a very responsible, loving kid"
		} else {
			$scope.shortBlurb = "";
		}
	};

	var onError = function (reason) {
		$scope.error = "Could not fetch the data.";
	};

	$scope.username = "Angular"; //"RLloyd";
	$scope.repoSortOrder = "-stargazers_count";

	/*$http.get("http://api.github.com/users/" + $scope.username)
	 .then(onUserComplete, onError);*/

	$scope.search = function (username) {
		$http.get("http://api.github.com/users/" + $scope.username)
			.then(onUserComplete, onError);
	};

	/*$http.get("../json/RLloydGitHubData.json").then(onUserComplete)*/

	/*$http.get('../json/RLloydGitHubData.json').success(function (data) {
	 $scope.login = data;
	 //console.log("$scope.avatar_url: ", $scope.avatar_url);
	 });*/
	//Accessing local json file. Not working! Don't know why.
	/*$http.get('rlloydgithubdata.json').success(function(data) {
	 $scope.login = data;
	 });*/

}]);
