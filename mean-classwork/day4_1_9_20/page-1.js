// step 1 get http package
// used to crate the http server or http client
const http = require('http')

//step2 : create the server process
const server = http.createServer((request,response) => {
    console.log('request successfuylly recieved')
    // te url: the path client is requesting (page)
    console.log(`url = ${request.url}`)
    // method: http method client used while sending the request
    console.log(`method = ${request.method}`)
        // read the response as html
   // response.setHeader('Content-Type', 'text/html')
     //read response as json
   response.setHeader('Content-Type', 'application/json')
    response.end('[{"name" : "suraj", "age" : 45}, {"name" : "suraj", "age" : 45}]')

})

//step 3: start a server
//listen on a port number 3000

server.listen(3000,'0.0.0.0', () => {
    console.log(`started listening on port 3000`)
})