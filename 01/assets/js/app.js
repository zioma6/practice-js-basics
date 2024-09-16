const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

const array = []

const addResult = parseFloat(a) + b;
console.log(addResult);
array.push(addResult)

const subtractResult = a - b;
console.log(subtractResult);
array.push(subtractResult)

const multiResult = a * b;
console.log(multiResult);
array.push(multiResult)

const divideResult = a / b;
console.log(divideResult);
array.push(divideResult)

const moduloResult = parseFloat(a) % b;
console.log(moduloResult);
array.push(moduloResult)

console.log(array)

const newArray = array.filter(el => el > 20)

console.log(newArray)

