const inputBox = document.querySelector("#inp");
const showResult = document.querySelector(".result");
const previousGuesses = document.querySelector(".pre-guesses");
const remainGuesses = document.querySelector(".remain-guesses");
const submitBtn = document.querySelector(".submit");
const restartBtn = document.querySelector(".restart");
const msgContainer = document.querySelector(".message-cont");
const msgBox = document.querySelector(".msg-box");
const msgBtn = document.querySelector(".msg-btn");
let count = 10;
let totalGuess = [];
remainGuesses.innerHTML = count;

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let originalNumber = generateRandomNumber();

restartBtn.onclick = () => {
  originalNumber = generateRandomNumber();
  count = 10;
  totalGuess.length = 0;
  submitBtn.classList.add("dis-none");
  previousGuesses.innerHTML = "";
  remainGuesses.innerHTML = 10;
  showResult.classList.add("dis-none");
  restartBtn.classList.add("disable");
};

submitBtn.onclick = () => {
  showResult.classList.remove("dis-none");
  const inputVal = Number(inputBox.value);
  showResult.style.color = "red";

  if (totalGuess.includes(inputVal)) {
    showResult.style.color = "#f76802";
    showResult.innerHTML = `${inputVal} Already guessed!`;
    inputBox.value = "";
    return;
  }

  if (inputVal > 100 || inputVal < 1) {
    showResult.style.color = "#f76802";
    showResult.innerHTML = "!Guess a number between 1 and 100";
    inputBox.value = "";
    return;
  }

  if (inputVal === originalNumber) {
    inputBox.value = "";
    msgContainer.classList.remove("hidden");
    const children = msgBox.children;
    children[0].innerHTML = "You Won!";
    children[1].innerHTML = `Congratulations!🤩 You have guessed a right number ${originalNumber}`;
    children[2].innerHTML = `Original number was ${originalNumber}`;
    children[3].firstElementChild.innerHTML =
      previousGuesses.innerHTML + ", " + originalNumber;
    return;
  } else {
    showResult.innerHTML = "You have guessed a wrong number. Try Again!";
  }

  count--;
  totalGuess.push(inputVal);
  inputBox.value = "";
  remainGuesses.innerHTML = count;
  previousGuesses.appendChild(document.createTextNode(inputVal + ", "));
  if (count === 0 && inputVal !== originalNumber) {
    msgContainer.classList.remove("hidden");
    const children = msgBox.children;
    children[0].innerHTML = "You Loss!";
    children[1].innerHTML = `Game is over🤖. Played well and try again.`;
    children[2].innerHTML = `Original number was ${originalNumber}`;
    children[3].firstElementChild.innerHTML = previousGuesses.innerHTML;
  }
  restartBtn.classList.remove("disable");
};

inputBox.onfocus = () => {
  submitBtn.classList.remove("dis-none");
};

msgBtn.onclick = () => {
  msgContainer.classList.add("hidden");
  originalNumber = generateRandomNumber();
  count = 10;
  totalGuess.length = 0;
  submitBtn.classList.add("dis-none");
  previousGuesses.innerHTML = "";
  remainGuesses.innerHTML = count;
  showResult.classList.add("dis-none");
  restartBtn.classList.add("disable");
};
