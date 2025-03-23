// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // compare two different datatype types will not give predictable result
// console.log("02" > 1); // it converts the string to number automatically but here below is the example

console.log(null > 0); // false // sometimes it converts it into NaN and Sometimes it converts it into 0 
console.log(null == 0); // false
console.log(null >= 0); // true ... it is bescause 

// the reason is that an equality check == and comparision > < >= <= work differently.
// comparisons convert null to a number, treating it as 0.
// That's why (3) null >=0 is true and (1) null > 0 is false

// that's why these are not give the predictable results


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
 
// So we need to avoid this type of camparisions because it can lead to confusions