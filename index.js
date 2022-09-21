// document.querySelector(".hihi").textContent = "🧑🏻‍🔧 hello from dhruv";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const printMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when no Number
  if (!guess) {
    printMessage("No Number 🧑🏻‍🔧");
  }

  // when guess !=
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈Too High" : "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      printMessage("💀 You Lost the Game!");
      document.querySelector(".score").textContent = 0;
    }

    // when player wins
  } else if (guess === secretNumber) {
    printMessage("🔥 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#32CD32";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
});

// Reset button Again!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  printMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
