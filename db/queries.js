
const connection = require("./connection");



class db {
    constructor(connection){
        this.connection = connection;
    }

    viewAllDept(){
        return this.connection.promise().query("SELECT * FROM department;");
    }
    viewAllRoles(){
        return this.connection.promise().query("SELECT * FROM role;");
    }
    viewAllEmployees(){
        return this.connection.promise().query("SELECT * FROM employee;");
    }

    // addDept(){
    //     return this.connection.promise().query(`INSERT INTO department (name) VALUES (${});`);
    // }
    // addRole(){
    //     return this.connection.promise().query(`INSERT INTO department (name) VALUES (${});`);
    // }
    // addEmployee(){
    //     return this.connection.promise().query(`INSERT INTO department (name) VALUES (${});`);
    // }

    updateEmployeeRole(){
        return this.connection.promise().query(
`SELECT ${/*employee*/employee.id}
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN
LEFT JOIN employee manager ON manager.id = employee.manager_id;`);
    }

}



module.exports = new db(connection);