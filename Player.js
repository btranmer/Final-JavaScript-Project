export default class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
    this.score = 0;
  }

  playCard() {
    return this.hand.shift();
  }
}


