const screen = document.querySelector("#screen");

function clickEvent() {
  const numbers = document.querySelectorAll(".input");
  const equal = document.querySelector(".input__equal");
  const clear = document.querySelector(".input__clear");

  //Prints value in screen(inputValue) for calculation
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      let x = e.target.dataset.num;
      screen.value += x;
    });
  });

  //Clears screen
  clear.addEventListener("click", () => {
    console.log(screen);
    screen.value = "";
  });

  //Solves and display result
  equal.addEventListener("click", () => {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let solution = eval(screen.value);
      screen.value = solution;
    }
  });
}

function main() {
  clickEvent();
}

main();
