/// <reference path="angular.min.js" />


var application_filter = angular
                                .module("hi_filter", [])
                                .controller("con_filter", function ($scope) {
                                    var employees = [
                                        { name: "Partha", dob: new Date("June 23, 1980"), gender: "male", salary: 56000.786 },
                                        { name: "Amit", dob: new Date("June 27, 1984"), gender: "male", salary: 52000 },
                                        { name: "Sahana", dob: new Date("January 23, 1986"), gender: "female", salary: 56000 },
                                    ];

                                    $scope.employees = employees;
                                    $scope.rowlimit = 2;
                                });