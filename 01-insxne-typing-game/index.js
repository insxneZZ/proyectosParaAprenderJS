const $time = document.querySelector("time");
const $paragraph = document.querySelector("p");
const $input = document.querySelector("input");

const INITIAL_TIME = 30;

const TEXT =
  "the quick brown fox jumps over the lazy dog insxne dog cat game test speed text";

let currentTime = INITIAL_TIME;
let words = [];

initGame();

function initGame() {
  /* divide cada palabra separa por espacios en un elemento del array */
  words = TEXT.split(" ").splice(0, 32);
  currentTime = INITIAL_TIME;
  $time.textContent = currentTime;
}
