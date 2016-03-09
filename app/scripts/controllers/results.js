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
    /*jshint expr: true*/
    $scope.flights = searchService.getFlights();
    $scope.flightOptions = $scope.flights.trips.tripOption;
    $scope.activeFlightInfo;

    /*assign flight index to have info shown*/
    $scope.showInfo = function(index) {
      $scope.activeFlightInfo = index;
    };

    /* return assigned flight index to have info shown*/
    $scope.isShowingInfo = function(index) {
       return $scope.activeFlightInfo === index;
    };
  }]);
