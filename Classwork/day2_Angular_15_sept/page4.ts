class Person{

    private _name :string
    private _age : number
    //trying to implement a constructor , use keyword constructor
    public constructor(name:string = '',age:number = 0)
    {
        console.log("inside constructor")
        this._name = name
        this._age = age
    }
  //setter
    public set name(name: string) {this._name = name}
    public set age(age:number) {this._age = age}
//getter
    public get name() { return this._name}
    public get age() { return this._age}
    // facilitator or utility 
   public canVote()
   {
       if(this._age >= 18) { console.log(`${this._name} is eligiable`)}
       else {console.log(`${this._name} is not eligiable`) }
   }

}
//using parameterless constructor 
//const p1 = new Person()

//p1.name = "suraj"
//p1.age = 26
//console.log(`name = ${p1.name}`)
//console.log(`age = ${p1.age}`)


// by parameterized constructor 
const p1 = new Person("suraj",26)
console.log(p1)

const p2 = new Person()

console.log(p2)

p1.canVote()
p2.canVote()