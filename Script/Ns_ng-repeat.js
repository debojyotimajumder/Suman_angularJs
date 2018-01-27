/// <reference path="angular.min.js" />

var ang_app = angular
                    .module("mymodule", [])
                    .controller("myconn", function ($scope) {
                        var countries_cities = [
                            {
                                name: "INDIA",
                                cities: [
                                    { name: "Durgapur" },
                                    { name: "Kol" },
                                    { name: "Siliguri" }
                                ]
                            },
                            {
                                name: "UK",
                                cities: [
                                    { name: "London" },
                                    { name: "Manchester" },
                                    { name: "Birmi" }
                                ]
                            }
                        ];

                        $scope.countries = countries_cities;

                    });


