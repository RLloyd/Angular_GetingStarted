/**
 * Created by Odee on 6/1/15.
 */
/*Controllers setup model. View consumes the model*/
/*x5: */
'use strict';
var app = angular.module("ghViewerApp", ['ngResource']);
app.controller("ControllerBasics", ["$scope", "$http", "$resource", "$interval", function ($scope, $http, $resource, $interval) {
        /*----------| SCOPE VARS |----------*/
        $scope.title = "GitHub Viewer";
        $scope.shortBlurb; // = something;
        $scope.username = "Angular"; //"RLloyd";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        /*----------| FUNCTIONS TO CALL |----------*/
        var onRepos = function (response) {
            $scope.repos = response.data;
        };
        var onUserComplete = function (response) {
            $scope.user = response.data;
            //$scope.login = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
            console.log("response.data: ", response.data);
            console.log("$scope.user.repos_url: ", $scope.user.repos_url);
            if ($scope.user) {
                $scope.shortBlurb = "John poot poot, napaka pilyong bata. Gusto nya sya masunod palagi. But he's also a very responsible, loving kid";
            }
            else {
                $scope.shortBlurb = "";
            }
        };
        var onError = function (reason) {
            $scope.error = "Could not fetch the data.";
        };
        /*----------| COUNTDOWN |----------*/
        var decrementCount = function () {
            $scope.countdown--;
            if ($scope.countdown < 1) {
                $scope.search();
            }
        };
        /*Implementing countdown*/
        /*var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCount, 1000, $scope.countdown);
        };
        startCountdown();*/
        /*or a shorter code implementation*/
        var countdownInterval = $interval(decrementCount, 1000, $scope.countdown); //Direct implementation
        /*----------| SEARCH |----------*/
        $scope.search = function (usernameX) {
            $http.get("http://api.github.com/users/" + $scope.username)
                .then(onUserComplete, onError);
            //$http.get("../json/RLloydGitHubData.json").then(onUserComplete, onError);
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null; //"";
            }
        };
        /*$http.get("http://api.github.com/users/" + $scope.username)
         .then(onUserComplete, onError);*/
        /*$scope.search = function (resource) {
            var resource = $resource('../json/:id' + '.json', {id: '@id'});
            console.log("resource: ",resource);
    
            return {
                getEvent: function (resource) {
                    console.log("resource: ", resource, getEvent());
                    return resource.get({id: 101});
                }
            };
        };*/
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
//# sourceMappingURL=Controllers.js.map