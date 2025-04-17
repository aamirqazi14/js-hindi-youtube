const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynumbers.map( (items) => { return items * 2})


// const newNums = mynumbers
//     .map((items) => items * 10 )
//     .map((items) => items + 1)
//     .filter((items) => items > 40)
 

// console.log(newNums)


// trying the same thing with forEach
const newNum = mynumbers.forEach(num => {
        if(num >= 1){
            let result = num * 10 
            if (result > 40){
                let final = result + 1

                //  console.log(final)
                return final
            }
        }
    });

    console.log(newNum)