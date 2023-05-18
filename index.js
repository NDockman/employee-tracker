
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
            }
        ])
        .then( answers => {
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

                default:
                    manageBusiness();
            }
        })
}


//displays all departments
function viewAllDept(){
    dbqueries.viewAllDept()
    .then(([rows]) => {
        let dept = rows
        console.table(dept)
    })
    .then(() => manageBusiness())
}

//displays all roles
function viewAllRoles(){
    dbqueries.viewAllRoles()
    .then(([rows]) => {
        let roles = rows
        console.table(roles)
    })
    .then(() => manageBusiness())
}

//displays all employees
function viewAllEmployees(){
    dbqueries.viewAllEmployees()
    .then(([rows]) => {
        let employees = rows
        console.table(employees)
    })
    .then(() => manageBusiness())
}

//adds a department to the department table
function addDept(){
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter a name for the new department:",
            name: "name"
        }
    ])
    .then(response => {
        let name = response
        dbqueries.addDept(name)
        .then(() => console.log(`Added ${name.name} to the database.`))
        .then(() => manageBusiness())
    })
}

//adds a role to the role table
function addRole(){
    dbqueries.viewAllDept()
    .then(([rows]) => {
        let departments = rows
        const deptChoices = departments.map( ({id, name}) => (
            {
                name: name,
                value: id
            }
        ))
        inquirer.prompt([
            {
                name: "title",
                message: "What is the name of the role?"
            },
            {
                name: "salary",
                message: "What is the salary for this role?"
            },
            {
                type: "list",
                name: "department_id",
                message: "What department does this role belong to?",
                choices: deptChoices
            }
        ])
        .then(role => {
            dbqueries.addRole(role)
            .then(() => console.log(`Added ${role.title} to the database`))
            .then(() => manageBusiness())
        })
    })
}

//adds an employee to the employee table
function addEmployee(){
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employees first name?"
        },
        {
            name: "last_name",
            message: "What is the employees last name?"
        }
    ])
    .then(response => {
        let firstName = response.first_name
        let lastName = response.last_name
        dbqueries.viewAllRoles()
        .then(([rows]) => {
            let roles = rows
            const roleChoices = roles.map( ({id, title}) => ({
                name: title,
                value: id
            }))
            inquirer.prompt({
                type: "list",
                name: "role_id",
                message: "What is the employee's role?",
                choices: roleChoices
            })
            .then(response => {
                let roleID = response.role_id
                dbqueries.viewAllEmployees()
                .then(([rows]) => {
                    let employees = rows
                    const managerChoices = employees.map( ({id, first_name, last_name}) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }))
                    managerChoices.unshift({name: "none", value: null})
                    inquirer.prompt({
                        type: "list",
                        name: "manager_id",
                        message: "Who is the employee's manager?",
                        choices: managerChoices
                    })
                    .then(response => {
                        let employee = {
                            manager_id: response.manager_id,
                            role_id: roleID,
                            first_name: firstName,
                            last_name: lastName
                        }
                        dbqueries.addEmployee(employee)
                    })
                    .then(() => console.log(`Added ${firstName} ${lastName} to the database`))
                    .then(() => manageBusiness())
                })
            })
        })
    })
}

function updateEmployeeRole(){
    dbqueries.updateEmployeeRole()
}


manageBusiness();