const express = require('express')
const mysql = require('mysql')

const parseBody = require('body-parser')
const { response } = require('express')


const app = express()
app.use(parseBody.json())

function log(request,response,next)
{
    console.log(`url : ${request.url}`)
    console.log(`method : ${request.method}`)
    next()
}


app.use(log)


app.get('/pizza',(request,response) => 
{
       
    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'dac',
        password : 'password',
        database : 'db'
    })
    
    console.log(request.body)

    statement = `select * from PIZZA_ITEMS`;
    
    connection.query(statement,(error,data) => {

        if (error)
          { 
              console.log(`error : ${error}`)
            response.end(`error : ${error}`)
        }
         else
         {   
             console.log(`data in table : `)
             console.table(data)
             response.send(data)
         }


    })
    


});



app.listen(3000,'0.0.0.0', () => {

    console.log(`server started successfully on port 3000 `)
})

