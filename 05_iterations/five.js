//for each loops:used to iterate through an array or collection of elements and perform specific actions on each element. 

const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){
     console.log(val);
 } )

 coding.forEach( (item) => {
    console.log(item);
 } )

 function printMe(item){
     console.log(item);
 }
 coding.forEach(printMe)

 coding.forEach( (item, index, arr)=> {
     console.log(item, index, arr);
 } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )