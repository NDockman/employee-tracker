
const connection = require("./connection");



class db {
    constructor(connection){
        this.connection = connection;
    }

    viewAllDept(){
        return this.connection.promise().query("SELECT * FROM department;");
    }
    viewAllRoles(){
        return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;");
    }
    viewAllEmployees(){
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;");
    }

    addDept(department){
        return this.connection.promise().query("INSERT INTO department set ?;", department);
    }
    addRole(role){
        return this.connection.promise().query("INSERT INTO role set ?;", role);
    }
    addEmployee(employee){
        return this.connection.promise().query("INSERT INTO employee set ?;", employee);
    }

    // updateEmployeeRole(){
    //     return this.connection.promise().query(`SELECT employee.id FROM employee, LEFT JOIN role ON employee.role_id = role.id, LEFT JOIN employee manager ON manager.id = employee.manager_id;`);
    // }
}



module.exports = new db(connection);