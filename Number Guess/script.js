let correctNumber = getRandomNumber();

let guesses = [];

window.onload = function () {
  document.getElementById("check").addEventListener("click", playGame);
  document.getElementById("restart").addEventListener("click", initGame);
};

function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses=[]
    displayHistory();

}

function playGame() {
  let numberGuess = document.getElementById("get-number").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  if (correctNumber > numberGuess) {
      showNumberBelow()
    } else if (correctNumber < numberGuess) {
        showNumberAbove()
    } else {
      showYouWon()
  }
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job , you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function saveGuessHistory(guess) {
    guesses.push(guess)
}

function displayHistory() {
    let index = guesses.length - 1;
    let list= "<ul class='list-group'>";
    list+='</ul>'
    while(index >= 0 ) {
        list += "<li class='list-group-item'>" + "You Guessed " + guesses[index] + "</li>";
        index-=1;
    }
    document.getElementById("history").innerHTML=list
}

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}
