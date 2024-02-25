const name = "Manish";
const age = "200";

// console.log("hello my name is " +name+ " i am " + age + " years old");
// this is the bad way of string interpolation

console.log(`My name is ${name} i am ${age} years old`);
// always do in this way

const Myname = new String("Mukti-pandey");

// console.log(Myname[0]);
// console.log(Myname.length);
// console.log(Myname.indexOf('k'));
// console.log(Myname.toUpperCase());
// console.log(Myname.charAt(3));


// const newName = Myname.substring(0,4);
// console.log(newName);

const anotherName = Myname.slice(-8,4);
console.log(anotherName);
