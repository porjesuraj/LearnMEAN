const mysql = require('mysql2')


const pool = mysql.createPool({

    host : 'localhost',
    user : 'dac',
    password : 'password',
    database : 'assignment',
    queueLimit : 0,
    waitForConnections : true,
    connectionLimit : 10

})

module.exports = pool