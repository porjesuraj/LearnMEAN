class Person {

    private _name:string
    private _age : number
    private _address : string

    //setter
    public setName(name:string)
    {
        this._name = name
    }
    //setter method can be accessed as a property by set and get keyword
    public set age(age: number)
    {
        this._age = age
    }

    public set Address(address:string){
        this._address = address
    }
    //getter

    public getName()
    {
        return this._name
    }
    public get age()
    {
        return this._age
    }
    public get Address ()
    {
        return this._address
    }


}

const p1 = new Person()

p1.setName('suraj')

console.log(`namee = ${p1.getName}`)

p1.age = 34

console.log(`age = ${p1.age}`)

p1.Address = "pune"

console.log(p1.Address)