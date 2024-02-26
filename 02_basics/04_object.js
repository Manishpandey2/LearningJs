// const appUser = new Object(); this is singleton

const appUser = {}; // and this is nonsingleton
appUser.id = "123abc";
appUser.name = "manish";
appUser.isLoggedIn = false;

// console.log(appUser);

const regularUser ={
    email: "manish@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mukti",
            lastname: "pandey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const fundingUser = {
    name: "manish",
    email: "manish@gmail.com",
    id: "123asd",
    isLoggedIn: false,
    address: "panchkhapan",
    phonenumber: 98123462165
}
const lisenseUser = {
    name: "pawan",
    email: "pawan@gmail.com",
    id: "154df",
    isLoggedIn: true
}

const obj = {fundingUser,lisenseUser};
// console.log(obj);

// const obj1 = Object.assign(fundingUser, lisenseUser);
// console.log(fundingUser);

// console.log(fundingUser === obj1);
const obj2 = {...lisenseUser, ...fundingUser}
// console.log(obj2);

const users = [
    {

    },
    {

    },
    {

    },
    {

    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
]
// console.log(fundingUser);
// console.log(Object.keys(fundingUser));
// console.log(Object.values(fundingUser));
// console.log(Object.entries(fundingUser));

// console.log(fundingUser.hasOwnProperty("isLoggedIn"));

const course ={
    coursename: "javascript",
    price: "4567",
    coursInstructor: "manish"
}
// console.log(course.coursInstructor);
const {coursInstructor: instructor} = course;
console.log(instructor);

//json api
// {
//    " name": "manish",
//     "coursename": "javascript api",
//     "price": "free"
// }

[
    {},
    {},
    {}
]