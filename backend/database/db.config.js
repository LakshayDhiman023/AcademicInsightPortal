import mysql from 'mysql'
import fs from "fs"
// var mysql      = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'dbms202211043.mysql.database.azure.com',
//   user     : 'LakshayDhiman',
//   password : 'L@kshay.07',
//   database : 'academicinsightportal'
// });
 



var connection=mysql.createConnection({host:"dbms202211043.mysql.database.azure.com", user:"LakshayDhiman", password:"L@kshay.07", database:"academicinsightportal", port:3306, ssl: true });
export default connection