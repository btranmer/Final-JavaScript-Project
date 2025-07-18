const Deck = require('./Deck');
const Player = require('./Player');

function playGame() {
  const deck = new Deck();
  const [hand1, hand2] = deck.deal();

  const player1 = new Player("Player 1", hand1);
  const player2 = new Player("Player 2", hand2);

  for (let i = 0; i < 26; i++) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();

    console.log(`Round ${i + 1}:`);
    console.log(`${player1.name} plays ${card1.toString()}`);
    console.log(`${player2.name} plays ${card2.toString()}`);

    if (card1.value > card2.value) {
      player1.score++;
      console.log(`${player1.name} wins the round\n`);
    } else if (card2.value > card1.value) {
      player2.score++;
      console.log(`${player2.name} wins the round\n`);
    } else {
      console.log("It's a tie!\n");
    }
  }

  console.log("Final Score:");
  console.log(`${player1.name}: ${player1.score}`);
  console.log(`${player2.name}: ${player2.score}`);

  if (player1.score > player2.score) {
    console.log(`${player1.name} wins the game!`);
  } else if (player2.score > player1.score) {
    console.log(`${player2.name} wins the game!`);
  } else {
    console.log("The game is a tie!");
  }
}

playGame();