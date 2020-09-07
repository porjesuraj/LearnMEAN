const mysql = require('mysql2')

const pool = mysql.createPool({

    host : 'localhost',
    user : 'dac',
    password : 'password',
    database : 'notes',
    waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool

