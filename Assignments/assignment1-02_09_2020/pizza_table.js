const mysql = require('mysql')


function createTable_Pizza()
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
  const statement = `create table PIZZA_ITEMS
  ( ID int(11) NOT NULL AUTO_INCREMENT,
    Name varchar(40),
    Type varchar(20),
    Category varchar(30),
    Description varchar(120),
    PRIMARY KEY (ID) ) `
 
    //step3: execute query asynchronously
    connection.query(statement,(error,data) => {
        console.log(`error : ${error}`)
        if(data)
        {
            console.log(`successfully created table pizza_items`)
        }
        else
        {
            console.log(`failed to create table pizza_items`)
        }
        connection.end()
    })
}



createTable_Pizza()


function insertRows(Name,Type,Category,Description)
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

const statement = `insert into PIZZA_ITEMS
(Name,Type,Category,Description)
values
('${Name}','${Type}','${Category}','${Description}')`

 connection.query(statement,(error,data) => {

    console.log(`error : ${error}`)
    if(data)
    {
        
     //  setTimeout( () => {
        console.log(`row inserted successfully `)
      // },1)

        
        
        
    }
 
    connection.end()
})


}

insertRows("corn pizza","main-item","pizza ","top 5  pizza  ")
insertRows("cheese pizza","main-item","pizza","top 5  pizza ")
insertRows("veg pizza","main-item","pizza","top 5  pizza ")
insertRows("non-veg pizza","main-item","pizza","top 5  pizza ")
insertRows("onion pizza","main-item","pizza","top 5  pizza ")


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

selectTable("PIZZA_ITEMS")
