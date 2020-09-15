function fun1()
{
    const numbers = [10,20,30,40,50]
 
    numbers.push(60)
    numbers.reverse()
    console.log(numbers)
    console.log(typeof(numbers))

}
//fun1()

function fun2()
{
   // const numbers:number[] = [1,2,3,4,5]

   const numbers:Array<number> = [1,2,3,4,5]
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];

        console.log(`square of ${number} = ${number* number}`)
        
    }


    console.log(numbers)
    console.log(typeof(numbers))

}

//fun2()

function fun3()
{
    const strings:string[] = ["india","USA","japan"]
    //const strings:Array<string> = ["india","USA","japan"]
     console.log(strings)
}
fun3()

function fun4()
{
    const myArray: any[] = [10,20,"test"]
    const myArray2:Array<any> = [10,20,"test"]
}