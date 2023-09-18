let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (user, computer, target) => {
  return Math.abs(user - target) <= Math.abs(computer - target);
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore++;
    case "computer":
      computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
