/// <reference path="angular.min.js" />


var myApp = angular
                    .module("mymodule", [])
                    .controller("myController", function ($scope) {
                        //var Student=
                        //{
                        //    Name: "Suman",
                        //    Email: "abc@gmail.com",
                        //    Password:"1234"
                        //}
                        $scope.student = "Hello Student!";
                    }); 

//var mycontroller = function ($scope) {
//    $scope.message = "Hi,Today we are in Angular JS Freamwork";
//}; 
//myApp.controller("thisCon",function ($scope) {
//    $scope.message = "Hi,Today we are in Angular JS Freamwork";
//}); 

//$scope.message = "Hi,Today we are in Angular JS Freamwork";