//for of loop

//["",""<""]
//[{},{},{}]
const arr=[1,2,3,4,5]

for (const num of arr){
    console.log(num);
}
const greeting="hello word!"
for (const geet of greeting){
    console.log(geet);
}
//maps 

const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr','France')
map.set('IN',"India")

//console.log(map);
for (const [key,value] of map){
    console.log(key,':-',value);
}

const myobject = {
    game1:'NFS',
    game2:'Spiderman'
}
//for (const [key,value] of myobject){
  //  console.log(key,':-',value);
//}