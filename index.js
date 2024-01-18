function display(val) {
  document.getElementById("result").value += val;
  return val;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    solve();
  }
});

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function deleteResult() {
  let currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
  //   if (currentValue.length > 0) {
  //     let randomIndex = Math.floor(Math.random() * currentValue.length);
  //     currentValue =
  //       currentValue.slice(0, randomIndex) + currentValue.slice(randomIndex + 1);
  //     currentResult.value = currentValue;
  //   }
}
