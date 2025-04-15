const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function print (item){
//     console.log(item)
// }

// coding.forEach(print)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })


const myObject = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    }
]

myObject.forEach((element) => {
    console.log(element.name+" "+element.age)
});