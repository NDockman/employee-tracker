
const mysql = require("mysql2");
const inquirer = require("inquirer");
const ctable = require("console.table")



function manageBusiness(){
    inquirer
        .prompt([
            {
                name: "menu",
                message: "Please select what you want to do:",
                type: "list",
                choices: ["view all employees", "add a department", "add a role", "add an employee", "Update an employee role"]
                /*
                rawChoices: function(){
                    const results = db.query(".....")
                    return results.map( row => ({ value: row.id, name: row.dept }))

                }
                */
            },
            {
                name: "text",
                type:"input",
                message:"Please choose",
                validate: (example) => {
                    if (example === 1){
                        return "string"
                    }
                    return true
                }
            }
        ])
        .then( answers => {

        })
}

manageBusiness();



function viewAllEmployees(){
    db.query("SELECT")
    //manageBusiness();
}

function viewAllEmployeesByDept(deptID){
    //query employees by dept id
}

function chooseDept(){
    //query for list of all dept.
    //user chooses a dept.
}