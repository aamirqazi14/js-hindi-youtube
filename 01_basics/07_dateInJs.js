

let mydate = new Date();
// console.log(mydate)
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate); // object

// let myCreatedDate = new Date(2025,0,25);
// let  myCreatedDate = new Date(2025,0,15,4,30);
let myCreatedDate = new Date("01-14-2025")

// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// console.log(`${newDate.getDay()} and the time is ${newDate.getMonth()} `)

newDate.toLocaleString('default',{
    weekday: "long",
})
