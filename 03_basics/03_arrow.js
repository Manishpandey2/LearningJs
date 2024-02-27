const user = {
    username: "manish",
    price: 456,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to this website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// // user.username = "mukti";
// // user.welcomeMessage();

// console.log(this);

// function learnThis() {
//     
// }
// learnThis();

// const learnThis = function() {
//     // let username =  "manish";
//     console.log(this);
// }
// learnThis();

// const learnThis = (num1, num2) => {
//     return num1 + num2;;    
// }
// const learnThis = (num1, num2) => num1 + num2;
const learnThis = (num1, num2) => (num1 + num2);
// const learnThis = (num1, num2) => ({username: "manish"});
console.log(learnThis(4,5));