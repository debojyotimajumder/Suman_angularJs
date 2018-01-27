/// <reference path="angular.min.js" />



var angular_app = angular.module("mymod",[])
                       .controller("mycon", function ($scope) {
                           var technologies = [
                               { name:"ASP.NET",likes:0,dislikes:0 },
                               { name:"JAVA", likes:0,dislikes:0 },
                               { name:"ANGULAR_JS",likes:0,dislikes:0 }
                           ];

                           $scope.technologies = technologies;

                           $scope.incrementLike = function (technology) {
                               technology.likes++;
                           };

                           $scope.incrementDislike = function (technology) {
                               technology.dislikes++;
                           };

                       });