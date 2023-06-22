const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
 port:"3306",
  database:'cv1'
});

conn.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database');
});

module.exports=conn