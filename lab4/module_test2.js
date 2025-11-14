// module_test.js

// --- Wersja 1: exports ---
const math1 = require('./myMathModule1');

console.log('Wersja 1 (exports):');
console.log('Dodawanie 5 + 3 =', math1.add(5, 3));
console.log('Odejmowanie 10 - 4 =', math1.subtract(10, 4));
console.log('Mnożenie 6 * 7 =', math1.multiply(6, 7));
console.log('Dzielenie 20 / 3 =', math1.divide(20, 3));
console.log('Potęga 2^5 =', math1.power(2, 5));
console.log('Pierwiastek √81 =', math1.sqrt(81));

// --- Wersja 2: obiektowa ---
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();

console.log('\nWersja 2 (obiektowa):');
console.log('Dodawanie 5 + 3 =', math2.add(5, 3));
console.log('Odejmowanie 10 - 4 =', math2.subtract(10, 4));
console.log('Mnożenie 6 * 7 =', math2.multiply(6, 7));
console.log('Dzielenie 20 / 3 =', math2.divide(20, 3));
console.log('Potęga 2^5 =', math2.power(2, 5));
console.log('Pierwiastek √81 =', math2.sqrt(81));
