'use strict';

describe('Service: flight', function () {

  // load the service's module
  beforeEach(module('flightAppApp'));

  // instantiate service
  var flight;
  beforeEach(inject(function (_flight_) {
    flight = _flight_;
  }));

  it('should do something', function () {
    expect(!!flight).toBe(true);
  });

});
