// before ES6
function sum(a, b) {
  return a + b
}

// ES6 arrowfunction
const sum2 = (a, b) => {
  return a + br
}

// ES6 arrowfunction
let sum3 = (a, b) => a + b


// before ES6
function isPositive(number) {
  return number >= 0
}

// ES6 arrowfunction
const isPositive2 = (number) => {
  return number >= 0
}

// ES6 arrowfunction
let isPositive3 = number => number >= 0


// before ES6
function randNum() {
  return Math.random
}

// ES6 arrowfunction
const randNum2 = () => {
  return Math.random
}

// ES6 arrowfunction
let randNum3 = () => Math.random


// before ES6
document.addEventListener('click', function() {
  console.log('click')
})

// ES6 arrowfunction
document.addEventListener('click', () => {
  console.log('click')
})

// ES6 arrowfunction
document.addEventListener('click',() => console.log('click'))

