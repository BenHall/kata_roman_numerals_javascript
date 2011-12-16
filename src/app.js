var RomanNumerals = function() {};

RomanNumerals.prototype.convert = function(v) {
  var result = "";
  var tens = v / 10;
  for(var i = 0; i < Math.floor(tens); i++) {
    result += "X";
  }

  var remainer = v % 10;
  for(var i = 0; i < remainer; i++) {
    result += "I";
  }

  result = result.replace("IIIII", "V");
  result = result.replace("VIIII", "IX");
  result = result.replace("IIIIV", "XI");
  result = result.replace("IIII", "IV");

  return result;
  
}
