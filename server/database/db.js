const mysql = require("mysql2");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Lakshay.07",
    database: "students",
 });


module.exports = db;
