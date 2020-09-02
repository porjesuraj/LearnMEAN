const http = require('http')

const server = http.createServer((request,response) => {

    console.log(`a request recieved`)
    //send a response
   
    //response.statusCode()
    response.end("<h1> loading server ...</h1cd>")
})

server.listen(3000,'0.0.0.0',() => {

    console.log(`server started successfully`)
})