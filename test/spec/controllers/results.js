'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('flightAppApp'));

  var ResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // Add controller tests
  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(ResultsCtrl.awesomeThings.length).toBe(3);
  // });
});
