const colorHead = document.querySelector(".color");
const changeBtn = document.querySelector(".change");
const resetBtn = document.querySelector(".reset");
const body = document.body;

const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

changeBtn.addEventListener("click", function () {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  colorHead.innerText = randomColor;
  resetBtn.removeAttribute("disabled");
});

// resetBtn.removeAttribute("disabled");

resetBtn.addEventListener("click", function (e) {
  body.style.backgroundColor = "rgb(255, 255, 255)";
  colorHead.innerText = "rgb(255, 255, 255)";
  resetBtn.setAttribute("disabled", true);
});
