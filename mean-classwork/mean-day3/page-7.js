//step 1 : get the http module
const http = require('http')

//step 2  :createa http server

const server = http.createServer((request,response) => {
console.log('a requst recieved')
//send a response 
response.end("<h1> hello from server...</h1>")
} )

//step 3: start the server
server.listen(4000,'0.0.0.0',() => {
    console.log('server started successfully')
}) 