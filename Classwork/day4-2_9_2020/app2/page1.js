const mysql = require('mysql')


function selectProducts() 
{

    //step 1 create connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dac',
    password : 'password',
    database: 'db',
    port: 3306
})
// step1.2 connecting 
connection.connect()
//step2 : prepare SQL query


const statement = `select id,title,price,description,category from products`

//step3: execute query is asnchronous function 

connection.query(statement,(error,data) => {
    console.log(`error : ${error}`)
    //step4: process the data
         //console.log(data)
         //for (let index = 0; index < data.length; index++) 
         //{
         //    const row = data[index];
         //    console.log(`is => ${id} `)
         //    console.log(` => ${} `)
//
        // }

        console.table(data)
    //step 5 : close the connection

connection.end()
})

}

selectProducts()






function insertProducts(title,price,description,category) 
{

    //step 1 create connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dac',
    password : 'password',
    database: 'db',
    port: 3306
})



const statement = `insert into products (title, price, description, category) 
values ('${title}', '${price}', '${description}', '${category}')`

//step3: execute query is asnchronous function 

connection.query(statement,(error,data) => {
    console.log(`error : ${error}`)
  
    console.log(`data: ${data}`)
    console.log(data)
    //step 5 : close the connection

connection.end()
})

}

insertProducts('redmi',10044,"mobile phone can see",'mobile')

function updateProducts(id,title,description,price,category,company) 
{

    //step 1 create connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dac',
    password : 'password',
    database: 'db',
    port: 3306
})
// step1.2 connecting 
connection.connect()
//step2 : prepare SQL query


const quertString = `update products
 SET title = '${title}',
 description = '${description}',
 price = '${price}',
category = '${category}',
company = '${company}'  where id = ${id}`;

//step3: execute query is asnchronous function 

connection.query(quertString,(error,data) => {
    console.log(`error : ${error}`)
  
        console.table(data)
    

connection.end()

})

}

updateProducts(5,"home","decor",2000)


function deleteProducts(id) 
{

    //step 1 create connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dac',
    password : 'password',
    database: 'db',
    port: 3306
})
// step1.2 connecting 
connection.connect()
//step2 : prepare SQL query


const quertString = `delete from products where id = ${id}`;

//step3: execute query is asnchronous function 

connection.query(quertString,(error,data) => {
    
      if(data)
      {
          console.log(`successful deleted id = ${id}`)
      }
      else
      {
        console.log(`error : ${error}`)
      }
       
connection.end()

})

}

//deleteProducts(2)