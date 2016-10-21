exports.hexToRgb = function(hexValue) {
  var red = parseInt(hexValue.substring(0, 2), 16);
  var green = parseInt(hexValue.substring(2, 4), 16);
  var blue = parseInt(hexValue.substring(4, 6), 16);

  return [red, green, blue ];
};
