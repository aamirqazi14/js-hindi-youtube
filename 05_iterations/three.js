// for of 

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const element of arr) {
    // console.log(element)
}

const greetings = "hello world"
for (const greet of greetings) {
//    console.log(`each char is ${greet}`) 
}

// maps

const map = new Map()
map.set('a', "apple")
map.set('b', "ball")
map.set('c', "cat")
map.set('d', "dog")

// console.log(map)

for (const [key,value] of map) { // destructure of array
    // console.log(key+" for = "+value)
}

const myObject = {
    name : "Salt",
    position : "Opener"
}

// for (const [key, value] of myObject) {
//     console.log(key+" = "+value)   
// }