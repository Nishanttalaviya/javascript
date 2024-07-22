const user = {
    username: "nishant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//console.log(this);

//  function wahh(){
//      let username = "nishant"
//      console.log(this.username);
//  }

//  wahh()

// const wah = function () {
//     let username = "nishant"
//     console.log(this.username);
// }
//  wah()

const chai =  () => {
    let username = "nishant"
    console.log(this);
}
chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}
//pernthis return kkeyword hoy

// const addTwo = (num1, num2) =>  num1 + num2

 //const addTwo = (num1, num2) => ( num1 + num2 )
//perthis hoy to return leyword no joy
//const addTwo = (num1, num2) => ({username: "nishant"})

console.log(addTwo(3, 4))


 const myArray = [2, 5, 3, 7, 8]

 myArray.forEach()