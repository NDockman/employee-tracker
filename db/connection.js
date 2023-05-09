
const mysql = require("mysql2");

var connection = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "Fremont23",
    database: "employee_tracker"
    },
    console.log(`Connected to the employee_tracker database.`)
)

connection.connect(function(error){
    if (error) throw error
})

module.exports = connection;
