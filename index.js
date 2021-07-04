/* -- requiring -- */

const mysql = require("mysql"); 
const inquirer = require("inquirer");   // allows node to prompt questions. 


/* -- imports information from other scripts -- */

const questionArrayEmployees = require("./questions.js"); // references the questions array object on questions.js 
const DB = require("./db/functions.js"); // imports all of the functins from functions.js
const { config } = require("process");
const { async } = require("rxjs");


/* -- Manages the information shown on the terminal -- */

const popTheQuestion = (questionArrayImport) => {
    inquirer.prompt(questionArrayEmployees)
    .then((answer) => {
        switch (answer.choice) {

            case "Add Employees":
            return createEmployees();

            case "Add Roles":
            return createRoles();

            case "Add Department":
            return createDepartment();

            case "View Employees":
            return getEmployees();

            case "View Roles":
            return getRoles();

            case "View Departments":
            return getDepartments();

            case "Update Employee Role":
            return reviseEmployeeRole();

            case "Exit Now": 
            return exitLoop();

            // default: 
            // console.log("Invalid Option"); 
            // break; 
        }
    });
}


/* -- Secondary Functions Return from popTheQuestion -- */
// was originally stored on a seperate functions.js file. Moved here to be easier. 

// functino name is different from the choice. Recommended by tutor 
async function createEmployees() {
    //function needs to be asynchronous. Makes this stateless. Does not wait for the operation to finish. 
    
    // creating scope locked variables. Will start "fresh" on each iteration.
    const roles = await config.allRoles(); // await can only be used inside an async function. Causes the function to pause until the a promise is settled.
    const employees = await config.allEmployees; 

    const employeePrompts = await prompt([
        // a prompt is asked as an array of objects
        {
            name: "first_name", // what the value is stored as.
            message: "What is the first name of our new employee?" // what will be prompted on the terminal
        }, 

        {
            name: "last_name", 
            message: "What is the last name of our new employee?"
        }
    ]); 


    // role population section
    const rolePrompts = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await prompt({
        type: "list", 
        name: "roleId", 
        message: "what role is the new employee doing?", 
        choice: rolePrompts // referencing the role mapping above
    });

    employeePrompts.role_id = roleId; 

    // manager population section
    const managerPrompts = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`, // using the answers from employeePrompts in this instance. 
        value: id
    }));

    managerPrompts.unshift({ name: "None", value: null }); 

    const { managerId } = await prompt({
        type: "list",
        name: "managerId",
        message: "Who is in charge of the new employee",
        choices: managerPrompts
    });

    employee.manager_id = managerId;

    await config.createEmployee(employee);

    // once the questions have been answered by the user. 
    console.log(
        `Added ${employee.first_name} ${employee.last_name} to the database`
    );

    popTheQuestion(); // returns to the main questions on the terminal
};


async function createRoles(){
    const departments = await config.allDepartments();

    const departmentPrompt = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));

    const role = await prompt([
        {
            name: "roleTitle",
            message: "which role will they be added?"
        },
        {
            name: "roleSalary",
            message: "What is the role salary?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department is added?",
            choices: departmentPrompt // will ask the name and id
        }
    ]);

    await config.createRole(role);
    console.log(`Added ${role.roleTitle} to the database`);

    popTheQuestion();
}

            
async function createDepartment(){
    const department = await prompt([
        {
            name: "name", //saved in the hash
            message: "which department will you add?"
        }
    ]); 

    await config.createDepartment(department); 
    console.log("new department added"); 

    popTheQuestion();
}
 

async function getEmployees() { // views the employees
    const employees = await db.findEmployees(); // retreives the employees

    console.log("\n check out the employees below \n");
    console.table(employees); // displays the found employees as a table 

    popTheQuestion();
}


async function getRoles() { // views the roles
    const roles = await db.findRoles(); // scope: function locked :)  

    console.log("\n check out the roles below \n");
    console.table(roles); // displays the found roles as a table 

    popTheQuestion();
}


async function getDepartments() { // views the departments
    const departments = await db.findDepartments();  
    
    console.log("\n check out the departments below \n");
    console.table(departments);  

    popTheQuestion();
}


async function reviseEmployeeRole() {


}


const exitLoop = () => {
    console.log("Thank you! Happy Productivity :)"); 
    // break; 
}


/* -- Gets the party started -- */

popTheQuestion(questionArrayEmployees); // initiates everything when node index.js is ran. 






















/*

            "Add Employees"
            "Add Roles"
            "Add Department"
            "View Employees" 
            "View Roles"
            "View Departments"
            "Update Employee Role" 
            "Exit Now"



async function popTheQuestion(question) {
    // I prompt the questions array to the user :D 
    console.log("\nFunction popTheQuestion initiated");

    await inquirer
        .prompt(question)
        .then((answer) => {

            console.log("This is userChoice within .then |  " + answer.userChoice + "\n");
            nintendoSwitchCase(answer.userChoice); // basically the function manager. 

        }, error => console.log(error))
}


function nintendoSwitchCase(userChoice) {
    console.log("userChoice within nintendoSwitchCase | " + userChoice);

    switch (userChoice) {
        // cleaner to read than a series of else if statements
        case "Add Department":
            return createDepartment();

        case "Add Roles":
            return createRoles();

        case "Add Employee":
            return createEmployees();

        case "View Departments":
            return getDepartments();

        case "View Roles":
            return getRoles();

        case "View Employees":
            return getEmployees();

        case "Update Employee Role":
            return reviseEmployeeRole();

        case "Update Employee Manager":
            return reviseEmployeeManager();

        case "View Employee By Manager":
            return getEmployeeByManager();

        case "Delete Departments":
            return removeDepartments();

        case "Delete Roles":
            return removeRoles();

        case "Delete Employee":
            return removeEmployee();

        case "View Department Budget":
            return getDepartmentBudget();
    }

}




*/







/*

proxy function name that calls on DB imports 


async function createDepartment() {
    
    const department = await inquirer.prompt([{
        name: "name", // what it will be stored in the hash as. Using answer.name is how it can be referenced
        type: "input", // text input. 
        message: "what department would you like to add?" // the user prompt. 
    }])
    //await db.addDepartment(department); // addDepartment() found on function.js
    //popTheQuestion; // brings up the question list again. 
}

async function createRoles() {

    const role = await inquirer.prompt([{
        name: "role",
        type: "input", 
        message: "what role would you like to add?"
    }])
    await db.addRoles(role); 
    popTheQuestion;
}

async function createEmployees() {
    const role = await inquirer.prompt([{
        name: "role",
        type: "input", 
        message: "Who is the employee you like to add?"
    }])
    await db.add_employees(role); 
    popTheQuestion;

}

async function getDepartments() {


}


async function getRoles() {


}

async function getEmployees() {


}


async function reviseEmployeeRole() {


}


async function reviseEmployeeManager() {


}
 
async function getEmployeeByManager() {


}


async function removeDepartments() {


}

async function removeRoles() {


}

async function removeEmployee() {


}

async function getDepartmentBudget() {


}

*/




/* references */

/*

        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package

*/
