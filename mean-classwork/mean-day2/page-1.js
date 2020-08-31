function fun1()
{ 
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  const squares = numbers.map(  (number) =>  { return number * number })
 
  console.log(squares)
}
//fun1()

function fun2()
{ 
    const numbers = [1,2,3,4,5,6,7,8,9,10]
  const evens = numbers.filter( (n) => { return n % 2 == 0 })
 
  console.log(evens)
}
fun2()