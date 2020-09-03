// step 1: require express and mysql
const express = require('express')
const mysql = require('mysql')

// step 2: create express application
const app = express()

// step 3: ROUTE (mapping of http GET, url and handler (function))
// GET /
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dac',
  password: 'password',
  database: 'db'
})
connection.connect();

app.get('/Customer', (request, response) => {
  console.log('GET / received')
  const queryText = `select * from Customer `
    
    connection.query(queryText,(error,data)=>{
        if(error == null)
            {
                response.send(JSON.stringify(data));
                console.table(data)
            }
            else{
                response.send(JSON.stringify(error));
            }
    });
})


// step 4: listen on port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})