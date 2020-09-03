const express = require('express')
const { request, response } = require('express')
const mysql = require('mysql')

const app = express()


function log1(request,response,next)
 {
console.log(`inside log `)
next()
 }

function log2()
 {
    console.log(`inside log2  `)
  return (request,response,next) => {
         conse.log(`inside log2 arrow func `)
            next() }
}

const answer = (request,response,next) => {

    console.log(`inside answer arrow func `)
 next()
                           }
 app.use(log1)
 app.use(log2)
//app.use(answer)



 app.get('/',(request,response) => {
     console.log(`inside GET /`)
     response.send('done')
 })



app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})

