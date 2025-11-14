// myMathModule1.js
function roundTwoDecimals(num) {
  return Math.round(num * 100) / 100;
}

// Eksportujemy kilka funkcji matematycznych
exports.add = function(a, b) {
  return a + b;
};

exports.subtract = function(a, b) {
  return a - b;
};

exports.multiply = function(a, b) {
  return a * b;
};

exports.divide = function(a, b) {
  if (b === 0) throw new Error("Dzielenie przez zero!");
  return roundTwoDecimals(a / b);
};

exports.power = function(a, b) {
  return Math.pow(a, b);
};

exports.sqrt = function(a) {
  if (a < 0) throw new Error("Pierwiastek z liczby ujemnej!");
  return roundTwoDecimals(Math.sqrt(a));
};
