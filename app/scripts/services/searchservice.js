'use strict';

/**
 * @ngdoc service
 * @name flightAppApp.searchService
 * @description
 * # searchService
 * Service in the flightAppApp.
 */
angular.module('flightAppApp')
  .service('searchService',[ 'flight', '$location', function (flight, $location) {
    var flights = {};
    function go (path) {$location.path(path);}
    return {
      getFlights: function() {
        return flights;
      },
      submit: function (data) {
        var requestData = {
          'request': {
            'slice': [
              {
                'origin': data.origin,
                'destination': data.destination,
                'date': data.date
              }
            ],
            'passengers': {
              'adultCount': data.passengerCount
            },
            /* Max solutions currently set to 5 until multiple tabs for results
            page implemented*/
            'solutions': 5,
            'maxPrice': data.maxPrice
          }
        };
        flight.save({}, requestData).$promise.then(function(response){
          flights = response;

          /*send user to results page*/
          go('/results');
        });
      }
    };
  }]);
