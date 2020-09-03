const persons = [
    {name : 'perosn1', age: 40},
    {name : 'perosn2', age: 4},
    {name : 'perosn3', age: 20},
    {name : 'perosn4', age: 10}

]

function myfunction()
{
    console.log(`inside my func`)

}

const num = 100
let salary = 14.56

//module.exports = { persons : persons, myfunction : myfunction, num : num,salary : salary}

module.exports = {
    persons: persons,
    function1: myfunction,
    num: num,
    salary: salary
  }