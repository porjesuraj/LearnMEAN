//
//class Shape{
//
//    _Area: number 
//
//    constructor (Area:number)
//    {
//        this._Area = Area
//    }
//}
//
//class Circle extends Shape {
//
//   display() :void{
//       console.log(`Area of circle is ${this._Area}`)
//   }
//}
//
//const c1 = new Circle(100)
//
//c1.display() //Area of circle is 100

/* ### Write a function that converts user entered date formatted as 
(MM/DD/YYYY) 
to a (YYYYMMDD) format.The parameter "userdate" and the return value
 are strings.
>  For Example,it should convert user entered date "12/31/2019" to "20191231"
function formatDate ( userDate ){
//write your code here
}
console.log ( formatDate( "12/31/2019" ))*/


function formatDates(userDate:string)
{ // "12/31/2019"  outpot 2019,12,31
  const date = userDate.split('/')

  console.log(`date is ${date[2] + date[0] + date[1]}`)
     const result = date[2] + date[0] + date[1]
     return result
}

formatDates("12/31/2019")
//or 
console.log(formatDates("12/31/2019"))