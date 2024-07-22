let a=300
if(true){
    let a=10;
    const b=20;
    console.log("INNER:",a);
    //var c=30;
}
console.log(a);
//console.log(b);
//console.log(c);



function one(){
    const username = "nishant"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website);

    two()

     console.log(" this is nishant from gir somnath");

}

one()

if (true) {
    const username = "nishant"
    if (username === "nishant") {
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);
}

 //console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
