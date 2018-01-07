'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieController
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */


angular.module('clientApp')
.controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
        fetch();
      }); //8ed4f7af-5490-427e-a5bf-b4f5ae2020fc
      //http://www.omdbapi.com/?apikey=[yourkey]&
      $scope.search = "Titanic";
      function fetch(){
        $http.get("https://api.themoviedb.org/3/search/movie?api_key=2e2a8c13eae4547a92d389ac710bf929&query=" + $scope.search )
        .then(function(response){ $scope.details = response.data; });
        
      }
      $scope.update = function(movie){
        $scope.search = movie.Title;
      };
      $scope.select = function(){
        this.setSelectionRange(0, this.value.length);
      }
    });