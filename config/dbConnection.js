const mysql = require('mysql2');
const host = 'localhost';
const database = 'saude';
const user = 'root';
const password = 'ifsp';

module.exports = () => {
    return dbConn = mysql.createConnection({
        host: host,
        database: database,
        user: user,
        password: password
    });
}

