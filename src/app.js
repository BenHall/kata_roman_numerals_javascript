var RomanNumerals = function() {};

RomanNumerals.prototype.to_roman = function(v) {
  function createStrForTens(val) { 
    var result = "";
    var tens = v / 10;
    for(var i = 0; i < Math.floor(tens); i++) {
      result += "X";
    }
    return result;
  }
  
  function appendStrWithRemainer(result, val) {
    var remainer = v % 10;
    for(var i = 0; i < remainer; i++) {
      result += "I";
    }

    return result; 
  }

  function convertToLargeRepresentation(result) {
    result = result.replace(/XXXXX/g, "L")
                    .replace(/XXXX/g, "XL")
                    .replace(/LL/g, "C")
                    .replace(/LXL/g, "XC")
                    .replace(/CCCCC/g, "D")
                    .replace(/CCCC/g, "CD")
                    .replace(/DCD/g, "CM")
                    .replace(/DD/g, "M");

    return convertToSmallerRepresentations(result);
  }

  function convertToSmallerRepresentations(result) { 
    result = result.replace(/IIIII/g, "V")
                    .replace(/VIIII/g, "IX")
                    .replace(/IIIIV/g, "XI")
                    .replace(/IIII/g, "IV");
    return result;
  }

  var result = createStrForTens(v);
  result = appendStrWithRemainer(result, v);
  result = convertToLargeRepresentation(result);

  return result;
}
