const oldFriends = ["Roshan", "Sudip", "Bibash", "Nabin", "Pabin", "Nirajan"];
const currentFriends = ["Sujan", "Amrit", "Jeewan", "Pawan","Nibandha"];

// oldFriends.push(currentFriends);
// console.log(oldFriends);
// console.log(oldFriends[3][1]);

// const allfriends = oldFriends.concat(currentFriends);
// console.log(allfriends);

const all_friends = [...oldFriends, ...currentFriends];
// console.log(all_friends);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat();
// console.log(real_another_array);

console.log(Array.isArray("Manish"));
console.log(Array.from("Manish"));
console.log(Array.from({name: "Manish"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));