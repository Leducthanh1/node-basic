import mysql from "mysql2/promise";

console.log("Creating connection pool");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

/*connection.query(
    'SELECT * FROM `users`',
    function(err, result, field){
        console.log('>>> check mysql')
        console.log(result)
    }
);*/

module.exports = pool;