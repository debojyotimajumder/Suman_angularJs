/// <reference path="angular.min.js" />


var app2 = angular
            .module("mymodule2", [])
            .controller("mycontroller2", function ($scope) {

                var employees = [
                    { name: "Sachin", gender: "Male", city: "Mumbai", salary: 60000 },
                    { name: "Virat", gender: "Male", city: "Delhi", salary: 50000 },
                    { name: "Mitali Raj", gender: "Female", city: "Jaipur", salary: 45000 },
                    { name: "Dhoni", gender: "Male", city: "Ranchi", salary: 55000 }
                ];

                $scope.emp = employees;

            });
                   