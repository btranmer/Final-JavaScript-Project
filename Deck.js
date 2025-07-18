const Card = require('./Card');

class Deck {
  constructor() {
    this.cards = [];
    this.generateDeck();
    this.shuffle();
  }

  generateDeck() {
    const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
    const values = [
      { value: 2, name: "2" }, { value: 3, name: "3" }, { value: 4, name: "4" },
      { value: 5, name: "5" }, { value: 6, name: "6" }, { value: 7, name: "7" },
      { value: 8, name: "8" }, { value: 9, name: "9" }, { value: 10, name: "10" },
      { value: 11, name: "J" }, { value: 12, name: "Q" }, { value: 13, name: "K" },
      { value: 14, name: "A" }
    ];

    for (let suit of suits) {
      for (let val of values) {
        this.cards.push(new Card(suit, val.value, val.name));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal() {
    return [this.cards.slice(0, 26), this.cards.slice(26)];
  }
}

module.exports = Deck;

