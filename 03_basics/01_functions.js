function sayMyname() {
    console.log("n")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("t")
}
sayMyname()

function addtonumber(number1, number2) {
    console.log(number1 + number2);
    consol
}

function addtonumber(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addtonumber(3, 4)
console.log("Result:", result);

function loginusermessage(username = "nishant") {
    if (username === undefined) {
        console.log("enter the name");
        return
    }

    return `$(username) just loged in`
}
console.log(loginusermessage())


function calculateprice(val1, val2, ...num1) {
    return num1
}
console.log(calculateprice(200, 300, 400))

const user = {
    username: "nishant",
    price: 199
}
function handobject(anyobject) {
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
}
handobject({
    username: "nishant",
    price: 399
})

const myarray = [200, 300, 400]
function returnsecond(getarray) {
    return getarray[1]
}
console.log(returnsecond(myarray));