let fruits = ["apple","grapes"];

fruits.push("mango");//add mango in the last element
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("kiwi");//add kiwi as the first element
console.log(fruits);

console.log(fruits.indexOf("grapes"))

fruits.forEach(item => console.log(item));

let newFruitArr = fruits.map(item => item.toUpperCase());
console.log(newFruitArr);

