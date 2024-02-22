// data type can be catogorized as how to store that data and how they can be accessed
// for ex. callby value and call by reference 

// Primitive

// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt



// Reference (Non primitive)

// Array, Objects, Functions

/*--- Heap, Stack ---*/

let myName = "manishpandey"
// console.log(myName);

let anotherName = myName;
// console.log(anotherName);

anotherName = "muktipandey"
console.log(anotherName);

/*----------------------------------------- non primitive ------------------------------------------*/

let userOne = {
    Uname: "Bibash",
    Uemail: "bibash@gmail.com",
    Upassword: "1234"
}
// console.log(userOne);

let userTwo = userOne;
// console.log(userTwo);

userTwo.Uemail = "bibash1234@gmail.com"

console.log(userTwo);
console.log(userOne);