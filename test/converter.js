var expect = require('chai').expect;
var converter = require('../app/converter.js');

describe('Color Coverter Test', function() {
  describe('hex to rgb', function() {

    it('if 1+1 equals 2', function() {
      expect(1+1).to.equal(2);
    });

    it('should convert basic hex values to rgb values', function() {
      // red, green, blue
      var red = converter.hexToRgb('ff0000');
      var green = converter.hexToRgb('00ff00');
      var blue = converter.hexToRgb('0000ff');

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);

    });
  });

  // describe('rgb to hex', function() {
  //
  // });
});
