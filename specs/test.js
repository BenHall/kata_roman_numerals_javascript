test("1 is converted to I", function() {
  var r = new RomanNumerals();
  result = r.convert(1);

  equals(result, "I");
});


test("4 is converted to iv", function() {
  var r = new RomanNumerals();
  result = r.convert(4);

  equals(result, "IV");
});

test("5 is converted to V", function() {
  var r = new RomanNumerals();
  result = r.convert(5);

  equals(result, "V");
});

test("8 is converted to VIII", function() {
  var r = new RomanNumerals();
  result = r.convert(8);

  equals(result, "VIII");
});

test("9 is converted to IX", function() {
  var r = new RomanNumerals();
  result = r.convert(9);

  equals(result, "IX");
});


test("10 is converted to X", function() {
  var r = new RomanNumerals();
  result = r.convert(10);

  equals(result, "X");
});

test("15 is converted to XV", function() {
  var r = new RomanNumerals();
  result = r.convert(15);

  equals(result, "XV");
});

test("16 is converted to XVI", function() {
  var r = new RomanNumerals();
  result = r.convert(16);

  equals(result, "XVI");
});

test("21 is converted to XVI", function() {
  var r = new RomanNumerals();
  result = r.convert(21);

  equals(result, "XXI");
});

test("50 is converted to L", function() {
  var r = new RomanNumerals();
  result = r.convert(50);

  equals(result, "L");
});

test("70 is converted to LXX", function() {
  var r = new RomanNumerals();
  result = r.convert(70);

  equals(result, "LXX");
});

test("40 is converted to XL", function() {
  var r = new RomanNumerals();
  result = r.convert(40);

  equals(result, "XL");
});

test("80 is converted to LXXX", function() {
  var r = new RomanNumerals();
  result = r.convert(80);

  equals(result, "LXXX");
});
