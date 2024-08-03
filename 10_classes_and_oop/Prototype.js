// let myName = "nishant     "
// let mychannel = "oop     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nishant = function(){   //nishant is method
    console.log(`nishant is present in all objects`);
}

Array.prototype.heynishant = function(){
    console.log(`nishant says hello`);
}

heroPower.nishant()
//heroPower.heynishant()
myHeros.nishant()
myHeros.heynishant()

// inheritance

const User = {
    name: "oop",
    email: "oop@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


//diffrent types program niche  che e
let anotherUsername = "prototypeAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"nishant".trueLength()
"iceTea".trueLength()