const name = "Aamir";
const repoCount = 50;

//   console.log(name + repoCount + " value") // This is old way 

// This is more readable
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aamir-Qazi');
// console.log(gameName[1]);
// console.log(gameName.__proto__);

console.log(gameName.length) 
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-4,-3)
console.log(anotherString)

const newStringOne = "   javascript";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube.com/you%20tube"

console.log(url.replace('%20','-'))

console.log(url.includes('fb'))

console.log(gameName.split('-'));

// read all String methods