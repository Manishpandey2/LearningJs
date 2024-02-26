var c = 564546;
let a = 565;
{
    let a = 45;
    const b = 78;
    var c = 65;
}


// console.log(a);
// // console.log(b);
// console.log(c);
 

// another part
// nested scope

function one(){
    const username = "manish";
    function two(){
        const website = "github";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "manish";
    if(username === "manish") {
        const website = "github";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// dlfja;lsdf;lajds;fljas;ldkf lau aayo aayo haha dimag kharab lafjldjf;ladsjf;ljasd;lfkjask;ld

// function addone(num){
//     return num + 1;
// }
// console.log(addone(5));

const addTwo = function(num){
    return num + 1;
}
console.log(addTwo(2));