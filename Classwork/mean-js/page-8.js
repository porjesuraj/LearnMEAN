function fun1()
{
    const numbers = [1,2,3,4,5,6,7,8,9]
    const square = (number) => 
    {
        return number * number
    }

    const squares = numbers.map(square)
    console.log(squares)
}


//fun1()

function fun2()
{
    const numbers = [1,2,3,4,5,6,7,8,9]

    const squares = numbers.map(
        (number) => {
            return number * number * number
        }
    )
console.log(squares)

}    
//fun2()


function fun3()
{
    const numbers = [1,2,3,4,5,6,7,8,9]
   const evens = numbers.filter( 
       (number) => 
       {
           return number % 2 == 0
       }
   )

   const odd = numbers.filter(
       (number) =>
       {
           return number % 2 != 0
       }
   )

   console.log(numbers)
   console.log(evens)
   console.log(odd)
}
fun3()