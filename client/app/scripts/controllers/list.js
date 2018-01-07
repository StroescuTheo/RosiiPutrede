'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:sampleCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */


angular.module('clientApp')
.controller('SampleCtrl', ['$scope', 'TableService', function ($scope, TableService) {
    $scope.getStuff = function(selection) {
        TableService.getMetaData(selection).then(function(response) {
            $scope.tablecolumns = response.data;
        });
    }
}]);