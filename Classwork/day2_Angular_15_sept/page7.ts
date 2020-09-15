abstract class Person{

    name:string
    age:number
    constructor(name:string,age:number)
    {
        this.name = name
        this.age = age
    }
    // abstract in TS is  same as pure vrtual function ,
    // as no implementation of the methods of this class,  so use abstract before method ,as well as class name
    // also : benifit need to override it in derived class, like profession 
    // it is incomplete , need to complete in --> subclass
    // SUB CLASS MUST implement this method
    public abstract printProfession() 

}

class Player extends Person{
      
    team: string
    constructor(name:string,age:number,team:string)
    {
        super (name,age)
        this.team = team
    }
    public printProfession() 
    {
           console.log(' procession = player')
    }

}

class Developer extends Person
{ 
company:string
     constructor(name:string,age:number,company:string)
       {
           super(name,age)
           this.company = company
       }

  public printProfession() 
  {
      console.log(`profession : developer`);
  }

}


//const person1 = new Person('person1', 26)
//console.log(person1)
const player1 = new Player('player1',26,'team india')
console.log(player1)
player1.printProfession()

const d1 = new Developer('suraj',26,'google')
console.log(d1)
d1.printProfession()