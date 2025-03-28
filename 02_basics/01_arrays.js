// array

const myArr = [0,1,2,3,4,5]
const player = ["Virat Kohli","Rohit Sharma", "Mohd Shami"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2])

// Array Methods

// myArr.push(6,7)
// myArr.push(9)
// myArr.pop()
// myArr.pop()


// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(3));

const newArr = myArr.join();
// console.log(myArr)

// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

console.log("A ",myArr)

const newA = myArr.slice(1,3);
console.log(newA);


console.log("B ",myArr)

const newB = myArr.splice(1,3);
console.log(newB);

console.log("C ",myArr); // Difference in splice, Asked in interviews   