//creating object using JSON 
function fun1()
{
    const person  = {
        name: 'person1',
        age : 40
    }

    console.log (` person = ${person} type - ${typeof(person)}`)

}   
//fun1()

function fun2()
{
    const persons = [
        {name: 'person1',age : 40 },
        {name: 'person1',age : 40 },
        {name: 'person1',age : 40 }
    ]
    console.log(persons)
   console.log (` person = ${persons} type - ${typeof(persons)}`)
}
//fun2()

function canVOte(person)
{
    if (person['age'] >= 18)
    {
        console.log(`eligiable ${person['name']}`)
    }
    else
    {
        console.log(` not eligiable ${person['name']}`)
    }
}



function fun3()
{
    const p1 = {name: 'perosn1', email: 'perosn1@test.com', age: 40}
    canVOte(p1)
    const p2 = {name: 'perosn2', email: 'perosn2@test.com', age: 10}
    canVOte(p2)
    const p3 = {name: 'perosn3', email: 'perosn3@test.com', age: 20}
    canVOte(p3)
    //p3.canVote()

}
//fun3()
function fun4()
{

    const p1 = {name: 'perosn1', email: 'perosn1@test.com', age: 40}
    console.log(`name : ${p1['name']}`)
    console.log(`email : ${p1['email']}`)
    console.log(`age : ${p1['age']}`)
}

//fun4( )

function fun5()
{

    const p1 = {name: 'perosn1', email: 'perosn1@test.com', age: 40}
    console.log(`name : ${p1.name}`)
    console.log(`email : ${p1.email}`)
    console.log(`age : ${p1.age}`)
}

//fun5( )

function fun6()
{
    const persons = { 
        'first name' : 'steve',
        'last name' : 'jobs'
       }
       console.log(`name : ${persons['first name']}`)
       console.log(`name : ${persons['last name']}`)
}

//fun6()

function canVOtePerson()
{
    console.log('inside cvp function ')
    console.log(this)
    if (this['age'] >= 18)
    {
        console.log(`eligiable ${this['name']}`)
    }
    else
    {
        console.log(` not eligiable ${this['name']}`)
    }
}



function fun7()
{
 // POP
 //canVOtePerson(p1)
    const p1 = {name: 'perosn1', email: 'perosn1@test.com', age: 40}
   
    const p2 = {name: 'perosn2', email: 'perosn2@test.com', age: 10}
  
    const p3 = {name: 'perosn3', email: 'perosn3@test.com', age: 20}
    const myVote = canVOtePerson
   myVote(p1)

//POP
 //console.log(`name = ${p1.name}`)
  p1.canVOte = canVOtePerson

 // console.log(p1)
 p1.canVOte()
 // console.log(p1.canVOte())
 
}

//fun7()

function fun8()
{
    const p1 = {name: 'perosn1', email: 'perosn1@test.com', age: 40,canVOte : canVOtePerson}
    const p2 = {name: 'perosn2', email: 'perosn2@test.com', age: 10,canVOte : canVOtePerson}
    const p3 = {name: 'perosn3', email: 'perosn3@test.com', age: 20,canVOte : canVOtePerson}

   // p1.canVOte = canVOtePerson
   // p2.canVOte = canVOtePerson
  //  p3.canVOte = canVOtePerson

    p1.canVOte()
    p2.canVOte()
    p3.canVOte()
}
//fun8()

function fun9()
{
    const car1 = {
        model: 'i20', company : 'hyundai', printDetails: function () { console.log(`model : ${this.model}`) 
        console.log(`company : ${this.company}`) }
    }
    const car2 = {
        model: 'i20', company : 'hyundai', printDetails: function() { console.log(`model : ${this.model}`) 
        console.log(`company : ${this.company}`) }
    }
    car1.printDetails()
    car2.printDetails()
}
//fun9.call()
//fun9()

function fun10()
{
    console.log(arguments)
    console.log(this)
}
fun10()