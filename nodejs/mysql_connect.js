const mysql=require("mysql2");
const{ connect }=require("./route");

var connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"saini.ekta20",
    database:"student_data",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    multipleStatements:true
})

module.exports =connection