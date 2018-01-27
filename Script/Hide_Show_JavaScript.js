/// <reference path="angular.min.js" />


var main_app= angular
             .module("my_module", [])
             .controller("my_controller",function ($scope) {

                 var employees = [
                     { name: "Sim", gender: "Male", city: "Kolkata", salary: 25000 },
                     { name: "Mimi", gender: "Female", city: "Dgp", salary: 24000 },
                     { name: "Ben", gender: "Male", city: "Chennai", salary: 35000 },
                     { name: "Chim", gender: "Male", city: "Bangalore", salary: 45000 }
                 ];

                 $scope.employee = employees;
                 $scope.htmltb = "TableContent.html";
             });

//var amar_controller_fn = 
                                           