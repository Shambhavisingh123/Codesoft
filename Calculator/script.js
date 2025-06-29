const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultShown = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultShown = true;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      if (resultShown && !isNaN(value)) {
        // if last action was = and user enters number, start new input
        currentInput = value;
        resultShown = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
