"use strict";
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

document.querySelector("#check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);

  //when there is no input
  if (!guess) {
    document.querySelector("#message").textContent = "⛔ No number";

    //when guess is correct
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector("#secret-number").textContent = secretNumber;
      document.querySelector(".title").textContent = "You won! 😍💚💛🧡";
      document.querySelector("#message").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor =
        "rgba(29, 124, 29, 1)";
      document.querySelector("#secret-number").style.width = "15rem";
    } else {
      document.querySelector("#secret-number").textContent = secretNumber;
      document.querySelector("#message").textContent =
        "You've finished your chance.😱";
      document.querySelector(".title").textContent = "You Lose! 😟💔💔";
      document.querySelector("body").style.backgroundColor =
        "rgba(163, 32, 32, 1)";
      document.querySelector("#secret-number").style.width = "15rem";
    }
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent = "Too high ";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#secret-number").textContent = secretNumber;
      document.querySelector("#message").textContent =
        "You've finished your chance.😱";
      document.querySelector(".title").textContent = "You Lose! 😟💔💔";
      document.querySelector("body").style.backgroundColor =
        "rgba(163, 32, 32, 1)";
      document.querySelector("#secret-number").style.width = "15rem";
    }
    //When guess is too low
  } else {
    if (score > 1) {
      document.querySelector("#message").textContent = "Too low";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#secret-number").textContent = secretNumber;
      document.querySelector("#message").textContent =
        "You've finished your chance.😱";
      document.querySelector(".title").textContent = "You Lose! 😟💔💔";
      document.querySelector("body").style.backgroundColor =
        "rgba(163, 32, 32, 1)";
      document.querySelector("#secret-number").style.width = "15rem";

      document.querySelector("#score").textContent = "0";
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("#secret-number").textContent = "?";
  document.querySelector("#message").textContent = "start paying again...";
  document.querySelector(".title").textContent = "Guess My Number!";
  document.querySelector("body").style.backgroundColor = "#302d2d";
  document.querySelector("#secret-number").style.width = "10rem";
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector("#guess").value = "";
});
// high score
