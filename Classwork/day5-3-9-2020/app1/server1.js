
const express = require('express')
//const mysql = require('mysql')
const { response, request } = require('express')

const app = express()
// this function is called as middleware, in express
// its a concept, that a function will be called before any of the routes

function log(request,response,next)
{    // next()
    console.log('inside log function ')
    console.log(`method = ${request.method}`)
    console.log(`url = ${request.url}`)
    //call next method  
    //sequence is important, next() should be at the end, or other in function is not called
    // next will refer the next function call
    next()
}

// this app will call the log function first before executing the route handler
// 1 -> log
// 2-> respective route handler 
app.use(log)



app.get('/',(request,response) => {
       
    //log(request,response)
    console.log(`inside get request`)
    response.end(`welcome to my REST application`)
})

app.post('/',(request,response) => {

    //log(request,response)

    console.log(`inside post request`)
    response.end('this is a post request')
})
app.put('/',(request,response) => {

    //log(request,response)
    console.log(`inside put request`)
    response.end('this is a post request')
})
app.delete('/',(request,response) => {
   // console.log(`method = ${request.method}`)
    //console.log(`url = ${request.url}`)
   // log(request,response)
   console.log(`inside post request`)
    response.end('this is a post request')
})


//----------------------------------------

 // product related route 

app.get('/product',(request,response) => {
    console.log(`inside get product request`)
    response.end('this is GET/product')
    //log(request,response)

})
app.post('/product',(request,response) => {
    console.log(`inside post product request`)
    response.end('this is POST/product')
   // log(request,response)

})
app.put('/product',(request,response) => {
    console.log(`inside put product request`)
    response.end('this is PUT/product')
   // log(request,response)

})
app.delete('/product',(request,response) => {
    console.log(`inside delete product request`)
    response.end('this is DELETE/product')

  //  log(request,response)

})

 //------------------------------------









app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})