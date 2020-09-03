const express = require('express')
const { request, response } = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
//used to parse request body content

app.use(bodyParser.json())



//____________________________
// product route 
//______________________________

app.get('/product',(request,response) => {

    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'dac',
        password : 'password',
        database: 'db'
    })

     // opening connection
    connection.connect()

    const statement = `select * from products`

    // execute

    connection.query(statement,(error,data) => {
        connection.end()
        if(error)
        {
            response.end(`error: ${error}`)
        }
        else 
        {
         console.log(console.table(data))
            //data is array of products object
           // response.end(data)
         //  const string = JSON.stringify(data)

          // response.setHeader('Content-Type','application/json')
          // response.end(string)
          //____________________________________________
          // send : string + end --> convert data to string, set the content-type header, 
          // andd send the string data to the client
          response.send(data)
        }
    })

})

app.post('/product',(request,response) => {

    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'dac',
        password : 'password',
        database: 'db'
    });

    connection.connect();
    console.log(`body : `);
    console.log(request.body);
    
    const statement = `insert into products (title,description, company,price,category) values('${request.body.title}', '${request.body.description}','${request.body.company}', '${request.body.price}','${request.body.category}')`;
    
    connection.query(statement, (error, data) => {
    connection.end();
    if (error) {
    response.end("Error");
    } else {
        console.log(`successfully inserted row`)
    response.send(data);
    }
    });
    });

  app.put('/product',(request,response) =>
   {

        const connection = mysql.createConnection({
            host : 'localhost',
            user : 'dac',
            password : 'password',
            database: 'db'
        })
    
        connection.connect();
        console.log(`body : `);
        console.log(request.body);
        
        const statement = `update products 
        set title = '${request.body.title}',
        description = '${request.body.description}',
        company = '${request.body.company}', 
        price = '${request.body.price}',
        category ='${request.body.category}'
        where id = ${request.body.id}`;
        
        connection.query(statement, (error, data) => {
        connection.end();
        if (error) 
        {
        response.end("Error");
        } else 
        {
            console.log(`successfully updated row ${request.body.id}`)
        response.send(data);
        }
        })
});

app.delete('/product',(request,response) =>
   {

        const connection = mysql.createConnection({
            host : 'localhost',
            user : 'dac',
            password : 'password',
            database: 'db'
        })
    
        connection.connect();
        console.log(`body : `);
        console.log(request.body);
        
        const statement = `delete from products 
        where id = ${request.body.id}`;
        
        connection.query(statement, (error, data) => {
        connection.end();
        if (error) 
        {
        response.end("Error");
        } else 
        {
            console.log(`successfully deleted row ${request.body.id}`)
        response.send(data);

        }
        })
});

// done get,post,put and delete for product 


app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})

