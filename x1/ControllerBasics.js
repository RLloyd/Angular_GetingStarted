/**
 * Created by Odee on 6/1/15.
 */
'use strict';
var app = angular.module("myApp", []);
app.controller("ControllerBasics", ["$scope", function ($scope) {
        $scope.name = "John";
        var son1 = {
            firstName: "Odee",
            lastName: "Gonzales",
            picture: "../images/odeeSchool.jpg"
        };
        var son2 = {
            firstName: "John",
            lastName: "Gonzales",
            picture: "../images/johnEating.jpg"
        };
        $scope.son1 = son1;
        $scope.son2 = son2;
    }]);
/*
var ControllerBasics = function($scope){
    $scope.name = "John";
};*/
//# sourceMappingURL=ControllerBasics.js.map