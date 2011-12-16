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

  result = result.replace(/XXXXX/g, "L");
  result = result.replace(/XXXX/g, "XL");
  result = result.replace(/LL/g, "C");
  result = result.replace(/LXL/g, "XC");
  result = result.replace(/CCCCC/g, "D");
  result = result.replace(/CCCC/g, "CD");
  result = result.replace(/DCD/g, "CM");
  result = result.replace(/DD/g, "M");
  result = result.replace(/IIIII/g, "V");
  result = result.replace(/VIIII/g, "IX");
  result = result.replace(/IIIIV/g, "XI");
  result = result.replace(/IIII/g, "IV");

  return result;
  
}
