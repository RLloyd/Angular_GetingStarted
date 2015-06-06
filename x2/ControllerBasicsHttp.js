/**
 * Created by Odee on 6/1/15.
 */
'use strict';
var app = angular.module("ghViewerApp", []);
app.controller("ControllerBasics", ["$scope", "$http", function ($scope, $http) {
        var onUserComplete = function (response) {
            $scope.user = response.data;
            $scope.login = response.data;
            console.log("response.data: ", response.data);
        };
        var onError = function (reason) {
            $scope.error = "Could not fetch the user.";
        };
        $http.get("http://api.github.com/users/RLloyd")
            .then(onUserComplete, onError);
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
//# sourceMappingURL=ControllerBasicsHttp.js.map