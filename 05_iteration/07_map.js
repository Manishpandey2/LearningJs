const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//using map
const result =myNumbers.map((num)=>num+10);
// console.log(result);
//using foreach
const newNumber = [];

myNumbers.forEach((num)=>{
    num = num + 10;
    newNumber.push(num);
})
// console.log(newNumber);

//chaining

const newNums = myNumbers
                        .map((num)=>num+10)
                        .map((num)=>num*2)
                        .filter((num)=>num>20)

console.log(newNums)