const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'SportDB',
    password:'',
    multipleStatements:true
  });
console.log('DB connected successfully...');
module.exports = connection;