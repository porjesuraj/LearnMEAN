//to find the even numbers from collection
function fun1()
{
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if(element % 2 == 0 )
        {
            console.log(element)
        }
       

    }

}
fun1()


function fun2()
{
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  const even = []
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if(element % 2 == 0 )
        {
          
            even.push(element)
        }
       

    }
    console.log(numbers)
     console.log(even)
}
fun2()

function isEven(number)
{
    return number % 2 == 0
}


function fun3()
{
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  const even = []
    for (let index = 0; index < numbers.length; index++)
     
    {
        const element = numbers[index];
        if(isEven(element))
        {
          
            even.push(element)
        }
       

    }
    console.log(numbers)
     console.log(even)
}

fun3()

function isOdd(number)
{
    return number % 2 != 0

}

function fun4()
{
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  const evenboll =  numbers.map(isEven)
  const even =  numbers.filter(isEven)
  const odds = numbers.filter(isOdd)

 console.log(numbers)
   //console.log(evenboll)
   console.log(even)
   console.log(odds)
}

fun4()

function price(cars)
{
    return cars['price'] < 10
}

function fun5()
 {
    const cars = [
       { model : "i20", price : 17.5, company:"tata",color:"red"},
       { model : "scorpio", price : 1.5, company:"ford",color:"red"},
       { model : "nano", price : 2.5, company:"toyota",color:"red"}
    ]
   const myCars = cars.filter(price)
  
   console.log(cars)
   console.log(myCars)
}  

fun5()


function canVote(person)
{
    return person['age'] > 18
}

function fun6() {

    const person = [
        {name : "person1", email:"person@gmail.com", age: 4},
        {name : "person2", email:"person@gmail.com", age: 3},
        {name : "person3", email:"person@gmail.com", age: 45},
        {name : "person4", email:"person@gmail.com", age: 46},
        {name : "person5", email:"person@gmail.com", age: 18},
        {name : "person6", email:"person@gmail.com", age: 19}
    ]
    
    const voter = person.filter(canVote)
    console.log(person)
    console.log(`person who can vote :`)
    console.log(voter)
   // console.log(`${voter}`)
}
  fun6()

