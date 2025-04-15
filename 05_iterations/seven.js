const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynumbers.map( (items) => { return items * 2})


const newNums = mynumbers
    .map((items) => items * 10 )
    .map((items) => items + 1)
    .filter((items) => items > 40)
 

console.log(newNums)