// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//global slution funtion expressions
( (name) => { //arrow funtion
    console.log(`DB CONNECTED TWO ${name}`);
} )('nishant')

