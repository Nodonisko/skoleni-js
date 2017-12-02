'use strict'

// Basic function
function sum(x, y) {
  return x + y
}
console.log(sum(2, 3))

// Basic anonymouse functions
const sum = function(x, y) {
  return x + y
}
console.log(sum(2, 3))

// Basic anonymouse function in callback
setTimeout(fuction() {
  console.log("Hello world!")
}, 1000)

// Basic non-anonymouse function in callback
function sayHello() {
  console.log("Hello world!")
}
setTimeout(sayHello, 1000)
