const fs = require('fs')

function syncRead()
{ 
    try 
    {
        console.log('file reading started')
        const data = fs.readFileSync('./file2.txt')
        console.log(`finished reading`)
        console.log(`data in file = ${data}`)
        console.log(`done `)

    } catch(ex)
    {
        console.log(`exception : ${ex}`)
    }

    console.log(`done read`)

    console.log(`performing multiplication`)
    const result = 4823479239*323
    console.log(`answer ${result}`)
    
}

//syncRead()

function readAsynch()
{
    console.log(`reading files started`)
    const data = fs.readFile('./file2.txt', (error,data) => {

        console.log(`reading is finished`)
        if(error)
        {
            console.log(`error = ${error}`)
        }
        else
        {
            console.log(`data : ${data }`)
        }


    })

    console.log(`done read`)

    console.log(`performing multiplication`)
    const result = 4823479239*323
    console.log(`answer ${result}`)
}
//readAsynch()

function fun1()
{
    console.log(`operation started`)
    setTimeout( () => {
        console.log(`operation finished`)
    },5000)

    console.log(`performing multiplication`)
    const result = 49*32
    console.log(`answer ${result}`)

    setTimeout( () => {
        console.log(`multiplicaiton done`)
    },10000)
}

//fun1()
function myRead(path,func)
{
    const data = fs.readFileSync(path)
    setTimeout( () => {
        func(null,data)
    },10000)
}
function myWriting(path,func)
{
    const data = fs.writeFile(path)
    setTimeout( () => {
        func(null,data)
    },5000)
}


function fun2()
{ 
    console.log(`reading to file`)
        myRead('./file2.txt',(error,data) => 
        {
            console.log(`data : ${data}`)
            console.log(`read finished`)
        })
   //console.log(`writing to file`)
   //   myWriting('./file2.txt',(error,data) => {
   //      console.log(`hello world hai sab`)
   //      console.log(`data = ${data}`)
   //   })

       console.log('performing mulitplication')
    const result =  244534433534 * 23424243242243
    console.log(`answer = ${result}`)



}

fun2()