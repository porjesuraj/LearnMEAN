function isEven(number)
{
    return number % 2 == 0
}
function isSquare(number)
{
    return number * number
}
function isOdd(number)
{
    return number % 2 != 0
}
function isCube(number)
{
    return number * number * number
}


function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
    // square of odd numbers

    const evens = numbers.filter(isEven)
    const evennumber = evens.map(isSquare)

   
       // cube of even numbers
       const odds = numbers.filter(isOdd)
    const oddnumber = odds.map(isCube)

    console.log(numbers)
    console.log(evennumber)
    console.log(oddnumber)
  }
  function1()


function canAfford(car)
{
    return car['price'] < 10
}
function cannotAfford(car)
{
    return car['price'] > 10
}
function afford(car)
{
    return { model : car['model'],company: car['company']  }
}
function notafford(car)
{
    return { price : car['price']  }
}


  function function6() {
    const cars = [
      { model: "i20", price: 7.5, company: "hyundai", color: "space gray"},
      { model: "nano", price: 2.5, company: "tata", color: "yellow"},
      { model: "x5", price: 35.5, company: "BMW", color: "dark blue"}
    ]
  

    // get model and company of affordable cars
  
    const affordCars = cars.filter(canAfford)
    const canafford = affordCars.map(afford)

    // get price of non-affordable cars
    const cantaffordCars = cars.filter(cannotAfford)
    const cannotafford = cantaffordCars.map(notafford)

    console.log(`affordable`)
    console.log(canafford)
    console.log(` not affordable`)
    console.log(cannotafford)
}
 
function6()
  
  function function7() {
    const persons = [
      { name: "person1", email: "person1@test.com", age: 14 },
      { name: "person2", email: "person2@test.com", age: 45 },
      { name: "person3", email: "person3@test.com", age: 50 },
      { name: "person4", email: "person4@test.com", age: 16 }
    ]
  
    // get name and age of persons who can vote
  
    // get name and email of persons who can not vote
  }
  