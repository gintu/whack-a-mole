let sqaures = document.querySelectorAll(".square");
let score = document.querySelector("#score");
let timeLeft = document.getElementById("time-left");

let result = 0;
let count = timeLeft.textContent;
console.dir(countDown);
let hitPosition;
function randomSquare() {
  sqaures.forEach(square => square.classList.remove("mole"));
  let randomPosition = sqaures[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

sqaures.forEach(square => {
  square.addEventListener("mouseup", () => {
    if (square.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

let timerId = null;
function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}
function countDown() {
  count--;
  if (count === 0) {
    alert("Time up.Your score is " + result);
    clearInterval(timerId);
  } else {
  }
  timeLeft.textContent = count;
}

let temp = setInterval(countDown, 1000);

moveMole();

setTimeout(() => {
  clearInterval(temp);
}, 60000);
