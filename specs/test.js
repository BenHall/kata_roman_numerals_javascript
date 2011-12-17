module("Roman Numerals");

var expected = {1: "I", 4: "IV", 5: "V", 8: "VIII", 9: "IX", 10: "X", 15: "XV", 16: "XVI", 21: "XXI", 50: "L", 70: "LXX", 40: "XL", 
                80: "LXXX", 90: "XC", 100: "C", 369: "CCCLXIX", 400: "CD", 448: "CDXLVIII", 500: "D", 1000: "M", 998: "CMXCVIII", 
                1998: "MCMXCVIII"}

test("converting to roman numerals", function() {
  for(var i in expected) {
    var expectedResult = expected[i];
    var r = new RomanNumerals();
    result = r.convert(i);

    equals(result, expectedResult, i.toString() + " is converted to " + expectedResult);
  }
});
