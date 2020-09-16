export class Person{

    private _name:string
    private _age : number
    private _address : string

    public constructor(name: string, address: string, age: number = 0) {
        this._name = name
        this._address = address
        this._age = age
      }



    public set name (name :string ) {this._name = name}
    public set  age(age : number ) {this._age = age }
     public set  address( address : string) {this._address = address }

     
public get name () { return this._name}     
public get  age () { return this._age}
public get  address() { return this._address}

public printInfo()
{
    console.log(` name = ${this._name}`)
console.log(`age  = ${this._age}`)
    console.log(` address = ${this._address}`)
}
public canVote() {
    if (this._age >= 18) {
      console.log(`${this._name} is eligible for voting`)
    } else {
      console.log(`${this._name} is NOT eligible for voting`)
    }
  }

}