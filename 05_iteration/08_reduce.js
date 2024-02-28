const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumber.reduce(function(acc,current){
    // console.log(`acc: ${acc}, current: ${current}`);
    return acc + current;
},0)
// console.log(result)

// const result = myNumber.reduce((acc,current)=>acc+current,1)
// // console.log(result)

const shoppingCart = [
    {
        itemName: "Black-Tshirt",
        price: 999
    },
    {
        itemName: "Foot Ball",
        price: 2500
    },
    {
        itemName: "Laptop",
        price: 58000
    },
    {
        itemName: "White Board",
        price: 1400
    },
    {
        itemName: "guitar",
        price: 5000
    }
]
const totolAmount = shoppingCart.reduce((acc,current)=>{
    return acc + current.price
},0)
console.log(`Total amount ${totolAmount}`)