const { findSourceMap } = require("module");

function test()
{
    myArray = [1,4,5,6,7,8,9,2,3]
    textArray = ["one","two","three","four ","five"]
    
   //let bool = 1
   // console.log(myArray.length)
  //  console.log(textArray.length)

    //myArray.prototype.add = function (n) { return n++ }

  //console.log(myArray.concat(textArray))
 // console.log(myArray)
 // console.log(textArray)  
 // console.log(myArray.join(textArray))  
 // console.log(myArray.pop())  
 // console.log(myArray)
 // console.log(myArray.push(9))  
 // console.log(myArray)

 //console.log(myArray)
// console.log(myArray.reverse())
 //console.log(myArray.shift())
 //console.log(myArray.slice(4,6))
 //console.log(myArray.sort())
//console.log(myArray.splice(7))
//console.log(myArray.toString())
//console.log(myArray.unshift(0))
console.log(myArray.valueOf())
 console.log(myArray)
 console.log(bool.valueOf())

}
 
//test()

function checkPrice(element,index,array)
{
   return (element >=10)
}



function fertilizer()
{
 // let batch_1 = [10,20,30,2,4,5,6].every(checkPrice);
 // console.log(batch_1)
 // let batch_2 = [30,40,20,50,70].every(checkPrice);
 // console.log(batch_2)

  //let batch_1 = [10,20,30,2,4,5,6]
  //let result = batch_1.filter((n) => { return n >= 10 })
  // console.log(result)
  // let batch_2 = [30,40,1,2,3,4,520,50,70]
  // let result2 = batch_2.filter((n) => { return n > 10 })
  //console.log(result2)


}

//fertilizer()


{

}
function fun1()
{
  let sum = [0,1,2,3,4,5,6,7,8]
  //let result = sum.reduce(function sumFunction (previousValue,currentValue,index,array) 
  //{ return previousValue + currentValue})
  //console.log(result)

  let result = sum.reduceRight(function sumFunction (previousValue,currentValue,index,array) 
  { return previousValue + currentValue})

  console.log(result)
}
fun1()