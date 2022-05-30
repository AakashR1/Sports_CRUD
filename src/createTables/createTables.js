const fs = require('fs');
const path = require('path');
const connection = require('../DB/db');
const query = fs.readFileSync(path.join(__dirname,'../sql/createTableQuery.sql'),'utf-8');

const createTable = ()=>{
    console.log('creating tables');
    connection.query(query,(err,result)=>{
        if (err) throw err;
        console.log('table created successfully...');
    });
}
module.exports = {
    createTable
};
