const form = document.querySelector("form");
const result = document.querySelector(".result");
const heading = document.querySelector(".heading");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const weightInp = e.target.children[0].children[1];
  const heightInp = e.target.children[1].children[1];
  const BMI =
    weightInp.value / ((heightInp.value / 100) * (heightInp.value / 100));

  result.innerText = BMI;
  heading.classList.remove("hidden");
  weightInp.value = "";
  heightInp.value = "";
});
