'use strict';

/**
 * @ngdoc function
 * @name flightAppApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the flightAppApp
 */
angular.module('flightAppApp')
  .controller('ResultsCtrl',[ '$scope', 'searchService', function ($scope, searchService) {
    $scope.flights = searchService.getFlights();
    $scope.flightOptions = $scope.flights.trips.tripOption;
    $scope.activeFlightInfo;

    $scope.showInfo = function(index) {
      $scope.activeFlightInfo = index;
    };

    $scope.isShowingInfo = function(index) {
       return $scope.activeFlightInfo === index;
    };
  }]);
