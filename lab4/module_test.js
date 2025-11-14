// module_test.js

// --- Wersja 1: exports ---
const currency1 = require('./currency1');

console.log('Wersja 1 (exports):');
console.log('100 USD →', currency1.toPLN(100, 'USD'), 'PLN');
console.log('50 EUR →', currency1.toPLN(50, 'EUR'), 'PLN');
console.log('20 GBP →', currency1.toPLN(20, 'GBP'), 'PLN');
console.log('30 CHF →', currency1.toPLN(30, 'CHF'), 'PLN');
console.log('40 CAD →', currency1.toPLN(40, 'CAD'), 'PLN');

// --- Wersja 2: obiektowa ---
const Currency = require('./currency2');
const rates = {
  USD: 4.20,
  EUR: 4.60,
  GBP: 5.30,
  CHF: 4.70,
  CAD: 3.10
};
const currency2 = new Currency(rates);

console.log('\nWersja 2 (obiektowa):');
console.log('100 USD →', currency2.toPLN(100, 'USD'), 'PLN');
console.log('50 EUR →', currency2.toPLN(50, 'EUR'), 'PLN');
console.log('20 GBP →', currency2.toPLN(20, 'GBP'), 'PLN');
console.log('30 CHF →', currency2.toPLN(30, 'CHF'), 'PLN');
console.log('40 CAD →', currency2.toPLN(40, 'CAD'), 'PLN');
