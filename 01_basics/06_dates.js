// Date in js

let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

// console.log(typeof date);
// const number = new Number(1234);
// console.log(typeof number);

// let myDate = new Date(2025, 5 , 24);
// let myDate = new Date("2025-05-24");
let myDate = new Date("01-04-2025");
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

let mytimeStamp = Date.now();
// console.log(mytimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay() );

newDate.toLocaleString('default', {
    weekday: "long",
})