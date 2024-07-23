const userEmail="ntalaviya037@rku.ac.in"

if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length===0){
    console.log("array is empty");
}
const emptyObj={}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//nulish coalesing operator (???):null unfined

let vall;
//vall=5 ?? 10
//vall =null ?? 10
//vall =undefind ?? 15

vall = null ?? 10 ?? 20
console.log(vall);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
