const { expect } = require('chai');
const Deck = require('../Deck');

describe('Deck', () => {
  it('should contain 52 unique cards', () => {
    const deck = new Deck();
    const cardStrings = deck.cards.map(card => card.toString());
    const uniqueCards = new Set(cardStrings);
    expect(uniqueCards.size).to.equal(52);
  });
});
