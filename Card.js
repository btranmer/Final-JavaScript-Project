class Card {
  constructor(suit, value, displayName) {
    this.suit = suit;
    this.value = value;
    this.displayName = displayName;
  }

  toString() {
    return `${this.displayName} of ${this.suit}`;
  }
}

module.exports = Card;
