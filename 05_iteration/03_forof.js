// for of

// ["","","",""]
// [{},{},{},{}]

const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
    // console.log(i);
}
let greetings = "Hello World";
for (const i of greetings) {
    if(i === " "){
        continue;
    }
    // console.log(i);
}

//Maps 

const map = new Map()
map.set('Np',"Nepal");
map.set('IN',"India");
map.set('CH', "China");
map.set('US', "America");
// console.log(map);
for (const [i , j] of map) {
     console.log(i, '=', j);
}

// this will not work because object is not iterable in forof loop
// const myObject = {
//     'book1': 'Atomic Habits',
//     'book2': 'The Power Of Your Subconsious Mind'
// }
// for (const [i , j] of myObject) {
//      console.log(i, '=', j);
//      console.log(i);
// }