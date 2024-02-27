//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", "false", " ", [], {}, function(){}

const userEmail = [];
const emptyObject = {};
if(userEmail){
    console.log("Got user email:");
}else{
    console.log("Don't have user email");
}
// if (userEmail.length === 0){
//     console.log("Array is empty");
// }
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let anyvalue;
// anyvalue = 5 ?? 47;
// anyvalue = null ?? 47;
// anyvalue = undefined ?? 47;
// anyvalue = null ?? 65 ?? 65;
anyvalue = null ?? undefined ?? 47;

// console.log(anyvalue);

// Terniary Operator

// Condition?true:false;
let daam = "20";
(daam === 20) ? console.log("price is 20"):console.log("price is not 20");