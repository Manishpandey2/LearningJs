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
// console.log(loginUserMessege());

// ----------------very basic of function finished

function calculateCartPrice(num2, num3, ...num1){
    return num1;
}

// console.log(calculateCartPrice(100, 200, 300));

const user = {
    name: "manish",
    price: 487
}
function handleObject(anyobject) {
    console.log(`${anyobject.name} bought the product of ${anyobject.price}`);
}
// handleObject(user);
// handleObject({
//     name: "anupam",
//     price: 788
// });

const arr = [100, 200, 300 ,400];
function returnThirdElement(number) {
    console.log(`The second element of the array is ${number[1]}`);
}
// returnThirdElement(arr);
returnThirdElement(
    [100, 55465, 6564, 665]
)