const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: process.env.DB_CON_LIMIT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

let db = {};
db.getAll = (param) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM registration WHERE username = ?`,
            [param],
            (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
    });
}

module.exports = db;