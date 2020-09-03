//step 1 require express
const express = require('express')


// step 2 create express application

const app = express()

//step3 : ROUTE (mapping of http GET , url and handler (function))
//= a way to say method :  get and url: '/' and handler (r,r)
// cannot GET / to solve this, as server cant understand GET
app.get('/product',(request,response) => {
    console.log('GET/recieved')
       response.end('from GET /')
})

app.post('/product',(request,response) => {
    console.log('GET/recieved')
       response.end('from POST /')
})

app.put('/product',(request,response) => {
    console.log('GET/recieved')
       response.end('from PUT /')
})

app.delete('/product',(request,response) => {
    console.log('GET/recieved')
       response.end('from DELETE /')
})


//step4 : listen on port 3000 

app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})
