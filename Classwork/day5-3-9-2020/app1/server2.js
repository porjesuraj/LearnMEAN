const express = require('express')

const app = express()


//this are middleware function , not the cmponent of web architecture 
function log1(request,response,next)
{    // next()
    console.log('inside log1 ')
    console.log(`method = ${request.method}`)
    console.log(`url = ${request.url}`)
    
    next()
}

function log2(request,response,next)
{    // next()
    console.log('inside log 2')
    console.log(`method = ${request.method}`)
    console.log(`url = ${request.url}`)
    
    next()
}

function log3(request,response,next)
{    // next()
    console.log('inside log 3')
    console.log(`method = ${request.method}`)
    console.log(`url = ${request.url}`)
    
    next()
}
// this app will call the log function first before executing the route handler
// 1 -> log
// 2-> respective route handler 
//sequence control by  way in  which function are called  
app.use(log1)
app.use(log2)
app.use(log3)

app.get('/',(request,response) => {
       
    //log(request,response)
    console.log(`inside get /`)
    response.end(`this is GET /`)
})



app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})

