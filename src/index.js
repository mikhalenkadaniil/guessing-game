class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.lastReturn = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.lastReturn = Math.ceil((this.max + this.min) / 2);
    return this.lastReturn;
  }

  lower() {
    this.max = this.lastReturn;
  }

  greater() {
    this.min = this.lastReturn;
  }
}

module.exports = GuessingGame;
