
// myMathModule2.js
class MyMathModule {
  constructor() {}

  roundTwoDecimals(num) {
    return Math.round(num * 100) / 100;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Dzielenie przez zero!");
    return this.roundTwoDecimals(a / b);
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  sqrt(a) {
    if (a < 0) throw new Error("Pierwiastek z liczby ujemnej!");
    return this.roundTwoDecimals(Math.sqrt(a));
  }
}

module.exports = MyMathModule;
