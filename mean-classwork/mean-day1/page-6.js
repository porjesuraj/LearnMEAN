function fun1()
{
    console.log(`inside a fun1`)
}

fun1()

const myfun1 = fun1

myfun1()
function fun2()
{
    console.log(`inside a fun1`)
}

const myfun2 = fun2

myfun2()


//unnamed/anonymous function
const myfunction2 = function ()
{
    console.log(`inside a fun1`)
}

//myfunction2()

const myfunction3 = function()
{
    console.log(`inside func 3`)
}
//myfunction3()

const myfunction4 =
 () =>  {
        console.log(`inside func 4`)
        }

myfunction4()


const square = 
(number) => {
    console.log(number * number) 
}

square(10)
