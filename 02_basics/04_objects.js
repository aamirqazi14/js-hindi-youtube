// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "first_name",
            lastname : "last_name"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)


const user = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "b@gmail.com"
    },
    {
        id : 1,
        email : "c@gmail.com"
    }
]

// console.log(user[0].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'))

const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"

}

// console.log(course.courseInstructor)

const {courseInstructor : instructor} = course

// console.log(instructor)

// {
//     "name" : "Aamir",
//     "Coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]