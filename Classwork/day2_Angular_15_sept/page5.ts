
//base class or superclass // use access specifier as protected to be accesible ain derived class
class Person{

    protected name:string = ''
    protected address:string = '' 
    protected age:number = 0
     
    constructor (name:string,address:string,age:number)
    {
        this.name = name
        this.address = address
        this.age = age
    }
    
}
// derived or  subclass  
class Player extends Person 
{
     team:string = ''


     //solution for base class parameterized constructor, declare cons here, 
     //use super keyword to get any or all base class data member
     constructor(name:string,address:string,age:number,team:string)
     { //calling super class (Person) constructor 
         super(name,address,age)
         this.team = team

     }
    
   
     public printInfo()
     {
         console.log(`name = ${this.name}`)
         console.log(`age = ${this.age}`)
         console.log(`address = ${this.address}`)
         console.log(`team = ${this.team}`)
     }
}

const person1 = new Person("suraj","nasik",26)

const player1 = new Player("suraj","nasik",26,"mumbai Indians")

console.log(person1)
console.log(player1)

player1.printInfo()