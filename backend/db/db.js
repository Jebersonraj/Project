const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jeber@16',
    database: 'employ'
});

module.exports = db;