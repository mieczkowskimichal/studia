// currency2.js
class Currency {
  constructor(rates) {
    this.rates = rates;
  }

  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }

  toPLN(amount, currency) {
    if (!this.rates[currency]) {
      throw new Error(`Nieznana waluta: ${currency}`);
    }
    return this.roundTwoDecimals(amount * this.rates[currency]);
  }
}

module.exports = Currency;
