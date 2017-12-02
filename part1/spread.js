'use strict'

// add in array
const names = ['john', 'jack', 'richard']
const newNames = ['daniel', ...names]
console.log(names)

// join two or more array
// const numbers1 = [1, 2, 3]
// const numbers2 = [3, 4, 5]
// const allNumbers = [...numbers1, ...numbers2]
// console.log(allNumbers)

// shallow copy object and add item
// const person = {
//   name: 'Jack',
//   gender: 'male',
//   age: 25
// }
// const personWithJob = {
//   ...person,
//   job: 'Developer'
// }
// console.log(personWithJob)

// in function params
// const myConsoleLog = (...items) => {
//   console.log(items)
// }
// myConsoleLog('hello', 'world', 1, 2)

// in function params + call
// const myConsoleLog = (firstItemOfArray, ...items) => {
//   console.log(firstItemOfArray, ...items)
// }
// myConsoleLog('hello', 'world', 1, 2)

// another magic
// const numbers = [1, 2, 3, 4, 5]
// console.log(...numbers)
