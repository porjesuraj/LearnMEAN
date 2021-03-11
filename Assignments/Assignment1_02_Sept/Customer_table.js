const mysql = require('mysql')

function createTable_Customer()
{
  // step 1 create connection
  const connection = mysql.createConnection({
      host : 'localhost',
      user : 'dac',
      password : 'password',
      database : 'db',
      port: '3306'

    
  })

  //step 2 prepare SQL query
  const statement = `create table Customer 
  ( ID int(11) NOT NULL AUTO_INCREMENT,
    Name varchar(30),
    Password varchar(15),
    Mobile varchar(15),
    Address varchar(60),
    Email varchar(40),
    PRIMARY KEY (ID) ) `
 
    //step3: execute query asynchronously
    connection.query(statement,(error,data) => {
        console.log(`error : ${error}`)
        if(data)
        {
            console.log(`successfully created table Customer`)
        }
        else
        {
            console.log(`failed to create table Customer`)
        }
        connection.end()
    })
}

createTable_Customer()


function insertRows(Name,Password,Mobile,Address,Email)
{

  //step 1 create connection

  const connection = mysql.createConnection( {
    host : 'localhost',
    user : 'dac',
    password : 'password',
    database : 'db',
    port : 3306
})

// step 2 create query statement

const statement = `insert into Customer 
(Name,Password,Mobile,Address,Email)
values
('${Name}','${Password}','${Mobile}','${Address}','${Email}')`

connection.query(statement,(error,data) => {

    console.log(`error : ${error}`)
    if(data)
    {
        
     //  setTimeout( () => {
        console.log(`row inserted successfully`)
      // },1)

        
        
        
    }
 
    connection.end()
})


}


insertRows("suraj","password",988383383,"nasik","surajporje@gmail.com")
insertRows("sagar","password",988383383,"nasik","sagarporje@gmail.com")
insertRows("kiran","password",988383383,"nasik","kiranporje@gmail.com")
insertRows("swati","password",988383383,"nasik","swatiporje@gmail.com")
insertRows("sarika","password",988383383,"nasik","sarikaporje@gmail.com")


function selectTable(tables)
{

    const connection = mysql.createConnection({

        host : 'localhost',
        user : 'dac',
        password : 'password',
        database : 'db',
        port : 3306
    
    })
    
    
    
    setTimeout( () => {
        const statement = `select * from  ${tables} `
    connection.query(statement, (error,data) => {
    
        console.log(`error : ${error}`)
        
     
       
            console.log(`now show table `)
            console.table(data)
       
        connection.end()
    })
},5000)

}

selectTable("Customer")