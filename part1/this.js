'use strict'
// Global this, in browser this === window, in node empty {}
console.log(this)

// this in function
// function sayThis() {
//   console.log(this)
// }
// sayThis()

// injected with bind
// const sayThis = function() {
//   console.log(this)
// }
// const sayThisWithBind = sayThis.bind(this)
// sayThisWithBind()

// custom this with bind
// const myThis = { name: 'My own this' }
// const sayThis = function() {
//   console.log(this)
// }
// const sayThisWithBind = sayThis.bind(myThis)
// sayThisWithBind()

// in object
// const getItems = function() {
//   return this.items
// }
// const toolbox = {
//   items: ['screwdriver', 'hammer'],
//   getItems: getItems,
// }
// const firstAidKit = {
//   items: ['bandage', 'ibalgin'],
//   getItems,
// }
// console.log('Toolbox: ', toolbox.getItems())
// console.log('First aid kit: ', firstAidKit.getItems())
