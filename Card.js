export default class Card {
  constructor(suit, value, displayName) {
    this.suit = suit;
    this.value = value;
    this.displayName = displayName;
  }

  toString() {
    return `${this.displayName} ${this.suit}`;
  }
}
