
/* -- requiring -- */

const mysql = require("mysql"); 
const inquirer = require("inquirer");   // allows node to prompt questions. 


/* -- imports information from other scripts -- */

const questionArrayEmployees = require("./questions.js"); // references the questions array object on questions.js 
const DB = require("./functions"); // imports all of the functins from functions.js


/* -- Manages the information shown on the terminal -- */

const popTheQuestion = (questionArrayImport) => {
    inquirer.prompt(questionArrayEmployees)
    .then((answer) => {
        switch (answer.choice) {

            case "Add Employee":
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

            /*

            Extra questions

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
            
            */

            default: 
            console.log("Invalid Option"); 
            break; 

        }
    });
}

























/*

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









/* proxy function name that calls on DB imports */

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


/* Gets the party started  */

popTheQuestion(questionArrayEmployees); // initiates everything when node index.js is ran. 





/* references */

/*

        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package

*/
