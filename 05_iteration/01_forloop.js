// for

for (let i = 1; i <= 13; i++) {
    const element = i;
    if(element == 7){
        // console.log("rest time");
        continue;
    }
    // console.log(element);
}
// console.log(element);

for (let i = 1; i <= 15; i++) {
    // console.log(`table of ${i}`);
    for (let j = 1; j <= 15; j++) {
        
        // console.log(`${i} *  ${j} = ${i * j}`);
    }
    
}

let array = ["manish","pabin","prabhat","basanta"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}

// break and continue

for (let index = 0; index < 6; index++) {
   
    if( index == 3){
        console.log("rest time");
    // console.log(index);
        continue;
    }
    
    console.log(index);
    
}
for (let index = 0; index < 6; index++) {
   
    if( index == 3){
        console.log("rest time");
    // console.log(index);
        break
    }
    
    console.log(index);
    
}