//forin 
const totalBook = {
    'book1': 'The Psychology of money',
    'book2': 'Rich Dad Poor Dad',
    'book3': 'Atomic Habit',
    'book4': 'The Power Of Your Subconsious Mind'
}
// console.log(totalBook);
for (const key in totalBook) {
    console.log(`${key} is about of ${totalBook[key]}`);
}

const  book = ["The Psychology of money","Rich Dad Poor Dat", "Atomic Habit", "The Power Of your Subconsious Mind"];
// console.log(book);
for (const key in book) {
    console.log(book[key]);
}

// const map = new Map()
// map.set('Np',"Nepal");
// map.set('IN',"India");
// map.set('CH', "China");
// map.set('US', "America");
// // console.log(map);

// for (const key in map) {
//     console.log(key);
// }