const mynums = [1,2,3]

// const total =  mynums.reduce( (acc,currval) => {
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0)

const total = mynums.reduce( (acc,curr) => acc + curr, 0)
// console.log(total)

const shoppingCart =[
    {
        item : "apple",
        price : 30.00,
    },

    {
        item : "orange",
        price : 20.00,
    },
    {
        item : "Banana",
        price : 5.00,
    },
    {
        item : "watermelon",
        price : 40.00,
    }
]

const priceToPay = shoppingCart.reduce( (acc, items) => acc + items.price, 0)

console.log(priceToPay)