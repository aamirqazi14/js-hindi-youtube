// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element)
}

// console.log(element)

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and Outer loop ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

let Players = ["Virat","Salt","patidar","krunal","hazelwood"]
// console.log(Players.length)
for (let i = 0; i < Players.length; i++) {
    const element = Players[i];
    // console.log(element)
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log("5 Detected")
//         break
//     }
//     console.log(i)
// }
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 Detected")
        continue
    }
    console.log("value of i = "+i)
}