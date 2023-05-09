
const mysql = require("mysql2");
const inquirer = require("inquirer");
const ctable = require("console.table");
const dbqueries = require("./db/queries");



function manageBusiness(){
    inquirer
        .prompt([
            {
                name: "menu",
                message: "Please select what you want to do:",
                type: "list",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
                /*
                type: "rawlist",
                rawChoices: function(){
                    const results = db.query(".....")
                    return results.map( row => ({ value: row.id, name: row.dept }))

                }
                */
            }
        ])
        .then( answers => {
            //console.log(answers)
            switch(answers.menu){
                case "view all departments":
                    viewAllDept();
                    break;
                case "view all roles":
                    viewAllRoles();
                    break;
                case "view all employees":
                    viewAllEmployees()
                    break;
                case "add a department":
                    addDept();
                    break;
                case "add a role":
                    addRole();
                    break;
                case "add an employee":
                    addEmployee();
                    break;
                case "update an employee role":
                    updateEmployeeRole()
                    break;

                // default: endApplication()
            }

            manageBusiness();
        })
}

manageBusiness();



function viewAllEmployeesByDept(deptID){
    //query employees by dept id
}

function chooseDept(){
    //query for list of all dept.
    //user chooses a dept.
}

function viewAllDept(){

}

function viewAllRoles(){

}

function viewAllEmployees(){
    dbqueries.viewAllEmployees()
    .then(([rows]) => {
        let employees = rows
        console.table(employees)
    })
    
}

function addDept(){

}

function addRole(){

}

function addEmployee(){

}

function updateEmployeeRole(){

}