//accumlator : final + cuurent value store


const mynums=[1,2,3]

const mytotal= mynums.reduce(function (acc , currval) {
    console.log(`ac:${acc} and currval:${currval}`);
    return acc+currval
},0)
console.log(mytotal);

const myTotal = mynums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shopping=[
    {
        itemname:"js course",
        price:999
    },
     {
        itemname:"py course ",
        price:5999
    },
   
    {
        itemname:"mobile course",
        price:6999
    },
   
    {
        itemname:"data science course",
        price:12999
    },
     ]
const pricepay = shopping.reduce((acc,item)=>acc+item.price,0) 
console.log(pricepay)