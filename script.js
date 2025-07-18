import Deck from './Deck.js';
import Player from './Player.js';

const card1El = document.getElementById('card1');
const card2El = document.getElementById('card2');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const statusEl = document.getElementById('status');
const button = document.getElementById('nextRound');

const deck = new Deck();
const [hand1, hand2] = deck.deal();

const player1 = new Player("Player 1", hand1);
const player2 = new Player("Player 2", hand2);

let round = 0;

button.addEventListener('click', () => {
  if (round >= 26) {
    statusEl.textContent = "Game Over!";
    button.disabled = true;
    return;
  }

  const card1 = player1.playCard();
  const card2 = player2.playCard();

  card1El.textContent = card1.toString();
  card2El.textContent = card2.toString();

  if (card1.value > card2.value) {
    player1.score++;
    statusEl.textContent = "Player 1 wins the round!";
  } else if (card2.value > card1.value) {
    player2.score++;
    statusEl.textContent = "Player 2 wins the round!";
  } else {
    statusEl.textContent = "It's a tie!";
  }

  score1El.textContent = `Score: ${player1.score}`;
  score2El.textContent = `Score: ${player2.score}`;
  round++;

  if (round === 26) {
    const winner =
      player1.score > player2.score
        ? "Player 1 wins the game!"
        : player2.score > player1.score
        ? "Player 2 wins the game!"
        : "It's a tie!";
    statusEl.textContent = winner;
    button.disabled = true;
  }
});
