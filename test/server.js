var expect = require('chai').expect;
var request = require('request');

describe('Color Converter API Test', function() {
  describe('Hex to rgb', function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it('should return status 200', function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct rgb string', function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal('[0,255,0]');
        done();
      });
    });
  });
});
