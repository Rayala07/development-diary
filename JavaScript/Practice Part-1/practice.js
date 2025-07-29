let firstName = "Rayala";
let lastName = "Viswanath";

let fullName = firstName + " " + lastName;

// console.log(fullName);

let userName = "Linda";
let greeting = "Hi there";

function greetMessage() {
  console.log(greeting + ", " + userName + "!");
}

// greetMessage();

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

// add3Points()
// add3Points()
// add3Points()

// remove1Point()
// remove1Point()

// console.log(myPoints)

let buttonEl = document.getElementById("purchase")
let errorEl = document.getElementById("error")

function errorMessage() {
    errorEl.textContent = "Something went wrong. please try again later"
}

