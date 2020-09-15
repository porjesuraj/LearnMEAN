
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
    // instead of writing two function , use function overriding by using virtual keyword in c++
    // in ts, just use same name for method , only this
    public printInfo()
    {
        console.log(`-------------person info  -----------`)
        console.log(`name = ${this.name}`)
         console.log(`age = ${this.age}`)
         console.log(`address = ${this.address}`)

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
    
   // method overriding using same method name in base and derived class 
     public printInfo()
     { 
         //super keyword:  can get/implement data members as well as methods
         super.printInfo()
        console.log(`-------------player info  -----------`)
        
         console.log(`team = ${this.team}`)
     }
}

const person1 = new Person("suraj","nasik",26)

const player1 = new Player("suraj","nasik",26,"mumbai Indians")

//console.log(person1)
//console.log(player1)
console.log(`person class`)
person1.printInfo()
console.log(`playerclass`)
player1.printInfo()
