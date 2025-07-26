let count = 0;

let countElement = document.getElementById("count-element");

function increment() {
  count++;
  countElement.innerText = count;
}
