function function1() {

    const numbers = [10, 20, 30, 40, 50]
    console.log(numbers)
    console.log(`type of numbers = ${typeof(numbers)}`)
  
    const countries = ["india", "usa", "uk"]
    console.log(countries)
    console.log(`type of countries = ${typeof(countries)}`)

    //array of pbject [json]
    const persons = [
        {"name" : "person1", age : 40},
        {"name" : "person1", age : 40}

    ];
    console.log(persons)
  console.log(`${persons} , type of = ${typeof(persons)}`)
  }
  
  //function1()

  function add()
  {
      console.log(arguments)
      let result = 0
    result = result + arguments;
      console.log(`add = ${result}`)
  }

  add(10,230);
  add(12,12,12);