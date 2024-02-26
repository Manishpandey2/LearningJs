function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addTwoNumbers(num1, num2){
    
    // console.log(num1 + num2);
    // let num3 = num1 + num2;
    // return num3;
    return num1 + num2;
}
// addTwoNumbers(4, 3);
// console.log(addTwoNumbers(7,8));

const num = addTwoNumbers(4, 3);
// console.log(num);
// console.log("Result ", num);

function loginUserMessege(username = "You"){
    // if(username === undefined)
    if(!username){
        console.log("please enter your name");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessege());

// ----------------very basic of function finished