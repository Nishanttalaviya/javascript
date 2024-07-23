//two execution context
//global (this keyword) and funtion and eval(memory phase,execution phase)
// if 
const isUserloggedIn = true
const temperture=41

if(temperture<50){
    console.log("less than 50");
}else{
console.log("temperture isgreater than 50");
}
console.log("execute")

const score=200
if(score>100){
    let power="fly"
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`);

//<,>,<=,>=,==,!=,===(type equal),!==()

const balance1 = 1000
if(balance1>500)console.log("test"),console.log("test2");

if (balance1<500){
    console.log("less than 500");
}else if (balance1<750){
    console.log("less than 750");
}else if (balance1<900){
    console.log("less than 900");
}else{
    console.log("less than 1200")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}