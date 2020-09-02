const express = require('express')
const mysql = require('mysql')

const app = express()

const connection = mysql.createConnection({

    host : 'localhost',
    user : 'dac',
    password : 'password',
    database : 'db'
})

connection.connect();

app.get('/pizza',(request,response) => {
 
    console.log('GET / received')
    const queryString = `select * from PIZZA_ITEMS`
  
    connection.query(queryString,(error,data) => {
       
        if(error == null)
        {
           response.end(JSON.stringify(data));
            console.table(data)
        }
        else
        {
            response.end(JSON.stringify(error));
        }
     
    });

})

app.listen(3000,'0.0.0.0', () => {

    console.log('server started on port 3000')
})