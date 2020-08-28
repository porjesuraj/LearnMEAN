function function1()
{
    const numbers = [1,2,3,4,5,6,7,8,9]

    for(let index = 0;index < numbers.length;index++)
    {  
        const number = numbers[index]
       const square = number * number;
       console.log(`${square}`) 
       
    }
}

//function1()

function function2() 
{ 
    const numbers = [1,2,3,4,5,6,7,8,9]
  const squares = []
  for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      squares.push(element*element)
  }
  console.log(`${numbers}`) 
  console.log(`${squares}`) 
}

//function2()

function square(number)
{
    return number * number
}

function function3() 
{ 
    const numbers = [1,2,3,4,5,6,7,8,9]
  const squares = []
  for (let index = 0; index < numbers.length; index++)
   {
      const element = numbers[index];
      squares.push(square(element))
   }
  console.log(numbers) 
  console.log(squares) 
}

//function3()


function function4() 
{ 
    const numbers = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  const squares = numbers.map(square)
  
  console.log(numbers) 
  console.log(`${squares}`) 
}

//function4()
function cube(number)
{
   // return number*number*number
   return Math.pow(number,3)
}

function function5() 
{ 
    const numbers = [1,2,13,14,15,16,17,18,19,20,21,22,23,24,25]
  const cubes = numbers.map(cube)
  
  console.log(numbers) 
  console.log(cubes) 
}

//function5()
function celsius(Faren)
{
    return  (5/9)*(Faren - 32)
}
function fun6() 
{
    const temp = [97,95,96,97,98,95]
    const cels = temp.map(celsius)
    console.log(temp)
    console.log(cels)
}
//fun6()
function carFeature(car) {
    //construct a new object with model and price
     return {model : car["model"], price: car["price"]}    
}

function fun7() {
    const cars = [
       { model : "i20", price : 7.5, company:"tata",color:"red"},
       { model : "scorpio", price : 1.5, company:"ford",color:"red"},
       { model : "nano", price : 2.5, company:"toyota",color:"red"}
    ]

    const newCars = cars.map(carFeature)
    console.log(cars)
    console.log(newCars)
    
}
//fun7()

function newPersons(person) {
    return {name: person['name'], age : person['age'] }
    
}

function fun8() {

    const person = [
        {name : "person1", email:"person@gmail.com", age: 40},
        {name : "person2", email:"person@gmail.com", age: 43},
        {name : "person3", email:"person@gmail.com", age: 45},
        {name : "person4", email:"person@gmail.com", age: 46},
    ]
    
    const newPerson = person.map(newPersons)
    console.log(person)
    console.log(newPerson)
}
fun8()