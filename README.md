var, let, const - done

arrow functions - done

build in methods - done

immutability spread - done

template strings

equality comparsion

destruct

# Školení - moderní Javascript

## Základy JS

### Proměné `var`, `let`, `const`

V JS máme tři základní způsoby jak definovat proměné, liší se především :

#### var

Původní způsob definice proměných v JS, vyznačuje se předvším tím že ve
**scope** přenáší dolů, ale i nahoru. Např.

```js
if (true) {
  var greetings = 'Hello from if!'
}
console.log(greetings) // Hello from if!
```

Pokud nepoužijeme žádné klíčové slovo pro difinici proměných, JS automaticky
nadefinuje do globální **scope**. Tohle je chování které ale nechceme, protože
ve většině případů to bude znamenat, že jsme někde udělali chybu, přepsali se
atd. Proto budeme všude používat tkz. `strict mode` který aktivujeme, umístěním
`"use strict"` na první řádek souboru. Viz.
(dokumentace)[https://www.w3schools.com/js/js_strict.asp].

#### let

Nový bezpečnější způsob definice proměných, protože jeho **scope** je izolovaný
pro daný statement a přenáší se pouze směrem dolů. Např.

```js
let greetings = 'Hello world!'
greetings = 'Hello Javascript!'
console.log(greetings) // Hello javascript
```

```js
if (true) {
  let greetings = 'Hello from if!'
}
console.log(greetings) // Undefined
```

#### const

Jak již název napovídá, `const` definuje konstantu tzn. její hodnotu po
nadefinování už nemůžeme změnit. Jeho **scope** je stejně jako u let izolovaný.

```js
const greetings = 'Hello world!'
greetings = 'Hello world again!' // error
```

### Funkce

#### klíčové slovo `this`

* chová se jinak ve strict a jinak v non-strict mode
* Pokud je při volání před názvem funkce tečka, hodnota **this** je objekt vlevo
* Jinak je **this** globální jmenný prostor
* **this** lze explicitně určit (např. pomocí `bind`)

Více info https://ondras.zarovi.cz/slides/2016/js-hard/#5

#### function

Klasické funkce definované pomocí `function` mají vlastní `this`.

#### arrow functions

Kratší zápis funkce. Nemají vlastní `this`.

### Build-in metody

Více v příkladech nebo dokumentace
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### Spread operator

Multifunkční operátor pro kopírování objektů, polí nebo např. pro neomezený
počet parametrů ve funkci. Viz. přiklady.

### Imutabilita

Pokud v JS vytvoříme pole nebo objekt, vytvoří se na tento objekt odkaz v
paměti, který je stále stejný a proto nemůžeme porovnávnat objekty pomocí tkz.
shallow comparsion. Např.

```js
const myFriends = ['richard', 'jack', 'robert']
const joeFriends = myFriends
myFriends.pop()
console.log(myFriends, joeFriends)
console.log('myFriends === joeFriends', myFriends === joeFriends)
```

### Template strings

Novinky z ES6 která umožňuje snadnější spojování stringů. Pokud cheme použít
template strings je nutné uzavřít celý string do tkz. **backtick**, pokud bychom
použili aposrofy nebo uvozovky, tak to nebude fungovat.

```js
// older way
const age = 22
const myAgeIs = 'My age is ' + age + '.'
console.log(myAgeIs)

// new way
const age = 22
const myAgeIs = `My age is ${age}.`
console.log(myAgeIs)
```

### Destructuring

Umožňuje definovat proměné přímo z vlastností objektů, viz příklad.

```js
const person = {
  name: 'Joe',
  age: 45,
  gender: 'male',
}
const { name, age, gender } = person
console.log(name, age, gender)
```

### Equality comparsion

V JS je možné porovnávat pomocí `==` nebo i `===`. Pomocí == porovnáváme hodnotu
bez ohledu na typ. Pomocí === kontrolujeme i typ. Z toho nám plyne že použítí ==
protože si nemůžeme být jistí co za hodnotu vlastně máme.
