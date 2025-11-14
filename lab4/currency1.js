// currency1.js
// Kursy przykładowe (możesz zmienić na aktualne)
const rates = {
  USD: 4.20,   // dolar amerykański → PLN
  EUR: 4.60,   // euro → PLN
  GBP: 5.30,   // funt → PLN
  CHF: 4.70,   // frank szwajcarski → PLN
  CAD: 3.10    // dolar kanadyjski → PLN
};

function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}

// Eksportujemy funkcje
exports.toPLN = function(amount, currency) {
  if (!rates[currency]) {
    throw new Error(`Nieznana waluta: ${currency}`);
  }
  return roundTwoDecimals(amount * rates[currency]);
};
