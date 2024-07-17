//const tinder = new object()
const tunderuser={}

tunderuser.id="1234abc"
tunderuser.name="summary"
tunderuser.isLoggedIn=false 
console.log(tunderuser);

const regularUser={
    email:"nishanttalaviya2308@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nishant",
            lastname:"talaviya",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
const obj3= Object.assign({},obj1,obj2,obj4)
//const obj3 ={...obj1,..obj2}
console.log(obj3) 

const user=[
    {
    id:1,
    email:"n@gmail.com"
},
    {
    id:1,
    email:"n@gmail.com"
},
    {
    id:1,
    email:"n@gmail.com"
},
    {
    id:1,
    email:"n@gmail.com"
},
]
user[1].email
console.log(tunderuser);

console.log(Object.keys(tunderuser));
console.log(Object.values(tunderuser));
console.log(Object.entries(tunderuser));

console.log(tunderuser.hasOwnProperty('isLoggleIn'));