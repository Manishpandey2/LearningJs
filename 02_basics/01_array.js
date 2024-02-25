// array

const arr = [1 , 2, 5, 4];
// console.log(arr[2]);

const Hero = ["batman","Manish","Mukti","Roshan"];
// console.log(Hero);

const myArr = new Array(1, 2, 5, 9);
// console.log(arr[0]);

// Array Methods

// arr.push(7);
// console.log(arr);
// arr.pop();
// arr.pop();

// arr.unshift(1);
// arr.shift();

// console.log(arr.includes(5));
// console.log(arr.indexOf(2));


// const newArr = arr.join();
// console.log(newArr);

// slice splice
console.log('A', arr);
const myn1 = arr.slice(1, 3);
console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1, 3);
console.log(myn2);
console.log("C" ,myn2);
console.log(arr);
