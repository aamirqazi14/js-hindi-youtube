const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python"
}
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}

const programming = ["js","rb","py","java","c++"]

for (const key in programming) {
//    console.log(programming[key])
}

const map = new Map()
map.set('a', "apple")
map.set('b', "ball")
map.set('c', "cat")
map.set('d', "dog")

for (const key in map) {
    console.log(key)
}