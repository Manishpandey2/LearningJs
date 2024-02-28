// const coding = ["js","java","python","ruby","cpp"];

// const values = coding.forEach((num)=>{
//     console.log(num)
//     return num;
// })
// console.log(values);

// for each don't return the value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let values = myNums.filter((num)=>num>5)
// let values = myNums.filter((num)=>{
//     // if(num<=8){
//     //     return num;
//     // }
//     return num<=7;    
// })
// console.log(values);

// const newNums = [];
// myNums.forEach((num)=>{
//     if(num>3){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const employeInfo =[
    {name: 'manish', age: 29, gender: 'Male'},
    {name: 'mukti', age: 50, gender: 'Male'},
    {name: 'Usha', age: 19, gender: 'Female'},
    {name: 'Rachana', age: 65, gender: 'Female'},
    {name: 'Ramesh', age: 10, gender: 'Male'},
    {name: 'Lakpa', age: 47, gender: 'Male'},
    {name: 'Sabitra', age: 55, gender: 'Female'},
    {name: 'Anjana', age: 100, gender: 'Female'},
    {name: 'Nima', age: 80, gender: 'Male'},
    {name: 'Anisha', age: 6, gender: 'Female'}

];
let employe = employeInfo.filter((info)=>{
    if(info.gender === "Female" && info.age>=20 && info.age<=70){
        return info;
    }
})
console.log(employe);