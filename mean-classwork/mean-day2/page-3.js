//create object using Object 

function fun1()
{
    //const p1 = {name : 'person1'}
// reference p1 will point to an object
    const p1 = new Object()
    console.log(p1)
   // console.log(p1)
   // console.log(` ${p1},type of ${typeof(p1)}`)
}

fun1()

function fun2()
{      //create a new object
    const p1 = new Object()
    //add the properties
    p1.name = 'person1'
    p1.email = 'test@gmail.com'
    p1.age = 40

    console.log(p1)

    const m1 = new Object()
    m1.model = 'iPhone'
    m1.company = 'apple'
    m1.price = '100000'

    console.log(m1)
}
fun2()

function fun3()
{
    const m1 = new Object()
    m1['model'] = 'iPhone'
    m1['company'] = 'apple'
    m1['price'] = '100000'

    console.log(m1)
}
//fun3()
function printed()
{
    console.log(`name = ${this.name}`)
    console.log(`age = ${this.age}`)
}
 
function fun4()
{
   const p1 = new Object()
   p1.name = 'perosn1'
   p1.age = 40
   p1.print = printed
   console.log(p1)
   p1.print()


}
fun4()