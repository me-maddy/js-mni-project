const leftArrow = document.getElementsByClassName("leftArrow")[0];
const rightArrow = document.getElementsByClassName("rightArrow")[0];
const items = document.getElementsByClassName("items");
const slides = document.getElementsByClassName("dot");

let count = 0;
let slideNumber = 1;
slides[count].style.backgroundColor = "#2c80d3";

leftArrow.addEventListener("click", () => {
  if (count >= 6) {
    return;
  } else {
    items[0].style.transform = `translateX(-${370 * (count + slideNumber)}px)`;
    count = count + slideNumber;
    rightArrow.classList.remove("hide");
    rightArrow.classList.add("cursor");
  }
  if (count === 6) {
    leftArrow.classList.remove("cursor");
    leftArrow.classList.add("hide");
  }
  slides[count - 1].style.backgroundColor = "#cacaca";
  slides[count].style.backgroundColor = "#2c80d3";
});

rightArrow.addEventListener("click", () => {
  if (count === 0) {
    return;
  } else if (count === 6) {
    leftArrow.classList.remove("hide");
    leftArrow.classList.add("cursor");
  }
  items[0].style.transform = `translateX(-${370 * (count - slideNumber)}px)`;
  count = count - slideNumber;
  if (count === 0) {
    rightArrow.classList.remove("cursor");
    rightArrow.classList.add("hide");
  }
  slides[count + 1].style.backgroundColor = "#cacaca";
  slides[count].style.backgroundColor = "#2c80d3";
});

Array.from(slides).forEach((dot, index) => {
  dot.addEventListener("click", () => {
    items[0].style.transform = `translateX(-${370 * index}px)`;
    for (let item of slides) {
      item.style.backgroundColor = "#cacaca";
    }
    dot.style.backgroundColor = "#2c80d3";
    if (index === 0) {
      rightArrow.classList.remove("cursor");
      rightArrow.classList.add("hide");
    } else {
      rightArrow.classList.remove("hide");
      rightArrow.classList.add("cursor");
    }
    if (index === 6) {
      leftArrow.classList.remove("cursor");
      leftArrow.classList.add("hide");
    } else {
      leftArrow.classList.remove("hide");
      leftArrow.classList.add("cursor");
    }
    count = index;
  });
});
