
function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
    // square of odd numbers
    const odds = numbers.filter
    (  (n) => 
        {
            return n % 2 != 0
        }
    )

    const squares = odds.filter
    (
        (o) => 
        {
            return o*o
        }
    )
   
       // cube of even numbers
      const evens = numbers.filter((n) => { return n%2 != 0 })
      const cubes = evens.map( (e) => { return e*e*e} )


      console.log(`array of numbers`)
    console.log(numbers)
    console.log(`square of odd numbers`)
    console.log(squares)
    console.log(`cube of even numbers`)
    console.log(cubes)
  }


 // function1()




  function function2() {
    const cars = [
      { model: "i20", price: 7.5, company: "hyundai", color: "space gray"},
      { model: "nano", price: 2.5, company: "tata", color: "yellow"},
      { model: "x5", price: 35.5, company: "BMW", color: "dark blue"}
    ]
  

    // get model and company of affordable cars
  
    const canAfford = cars.filter( (c) => { return c['price'] < 10 } )
    const modelOfaffordable = canAfford.map( (c) =>
     { return {model : c['model'],company : c['company'] } } ) 


    // get price of non-affordable cars
     const cannotAfford = cars.filter( (c) => {  return c['price'] > 10 } )
     const priceOfUnaffordable = cannotAfford.map
     ( function (c) { return { price : c['price']  }} )


    console.log(`cars`)
    console.log(cars)
    console.log(` get model and company of affordable cars`)
    console.log(modelOfaffordable)
    console.log(` get price of non-affordable cars`)
    console.log(priceOfUnaffordable)
}
 
function2()
  
  function function3() {
    const persons = [
      { name: "person1", email: "person1@test.com", age: 14 },
      { name: "person2", email: "person2@test.com", age: 45 },
      { name: "person3", email: "person3@test.com", age: 50 },
      { name: "person4", email: "person4@test.com", age: 16 }
    ]
  
    // get name and age of persons who can vote
    const checkVoter = persons.filter( (p) => { return p['age'] > 18 })
    const Voter = checkVoter.map( (v) => 
    { return  { name : v['name'], age : v['age']   }})


    // get name and email of persons who can not vote
     checkNotVoter = persons.filter( (p) => { return p['age'] < 18 } )
     nonVoter = checkNotVoter.map( (nv) => 
      { return { name : nv['name'], email: nv['email']  }})

    console.log(persons)
    console.log(`get name and age of persons who can vote`)
    console.log(Voter)
    console.log(`get name and email of persons who can not vote`)
    console.log(nonVoter)
  }
  function3()