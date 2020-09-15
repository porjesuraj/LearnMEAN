//empty class
//let firstName:string = "person1"
//let age = 40
// 

//function printInfo()
//{
//
//}
//here datatype and method ,does not need a keyword like, let,const, or function 
class Person 
{
    //data memeber of the class(c++)
    //Property of the class(TS)
    //fields of the class(java)

    firstName:string
    age:number
    address:string

    printInfo()
   {
       console.log(this.firstName)
       console.log(this.age)
       console.log(this.address)

    
   }
}

const p1 = new Person()

p1.firstName = "suraj"
p1.age = 26
p1.address = `nasik
maharashtra
india
earth`

console.log(p1)
console.log(typeof(p1))
p1.printInfo()





function Person1(name,age,address)
{
    this.name = name
    this.age = age
    this.address = address
   
}
var person1 = new Person1("suraj",26,"nasik")
//console.log(person1)


