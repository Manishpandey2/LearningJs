// Immediately Invoked Function Expressions (IIFE)

(function iife() {
    // named iife
    console.log("Database Connected");
})();



( (name) => {
    console.log(`${name} is on the journey to master the js`);
})("manish");