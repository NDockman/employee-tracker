
const connection = require("./connection");



class db {
    constructor(connection){
        this.connection = connection;
    }

    viewAllEmployees(){
        return this.connection.promise().query("SELECT * FROM employee;");
    }
}



module.exports = new db(connection);