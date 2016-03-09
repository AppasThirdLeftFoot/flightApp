'use strict';

/**
 * @ngdoc service
 * @name flightAppApp.flight
 * @description
 * # flight
 * Factory in the flightAppApp.
 */
angular.module('flightAppApp')
  .factory('flight', function ($resource) {
    return $resource('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyA-9IUAWKDfnyizjGk_zMztxyNucKFD5qE&fields=trips/tripOption(saleTotal, slice)');
  });
