const dice1Element = document.querySelector(".img1");
const dice2Element = document.querySelector(".img2");

const getRandomInteger = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const diceSelector = {
  1: "dice1",
  2: "dice2",
  3: "dice3",
  4: "dice4",
  5: "dice5",
  6: "dice6",
};

window.onload = (e) => {
  const player1Dice = getRandomInteger();
  const player2Dice = getRandomInteger();

  const dice1 = `./images/${diceSelector[player1Dice]}.png`;
  const dice2 = `./images/${diceSelector[player2Dice]}.png`;

  const score = player1Dice - player2Dice;
  dice1Element.src = dice1;
  dice2Element.src = dice2;

  const msg = document.querySelector("h2");

  if (score > 0) {
    document.querySelector("h2").innerText = "Player 1 wins";
  } else if ((score === 0)) {
    document.querySelector("h2").innerText = "Draw";
  } else {
    document.querySelector("h2").innerText = "Player 2 wins";
  }
};
