//singleton > only constructor makes singleton object
// object.create

//object literals

const mySymbol = Symbol("key1");

const user = {
    name: "manish",
    "full name": "Manish Pandey",
    email: "manish@gmail.com",
    address: "Itahari",
    age: 18,
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"],
    [mySymbol]: "mykey1"
}
// console.log(user.email);
// console.log(user["email"]);

// console.log(user["full name"]);

// console.log(user[mySymbol]);
// Object.freeze(user);
user.email = "mukti@gmail.com";
// console.log(user);

user.greeting = function() {
    console.log("Namaste");
}
user.greetingtwo = function() {
    console.log(`Namaskar ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingtwo());