const inquirer = require("inquirer");   // allows node to prompt questions. 
const questionArrayEmployees = require("./peripherals/questions.js"); // references the questions array object on questions.js 

const DB = require("./peripherals/functions"); // imports all of the functins from functions.js


/*  Question Selection  */

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

function popTheQuestion(question) {
    // I prompt the questions array to the user :D 
    console.log("\nFunction popTheQuestion initiated");

    inquirer
        .prompt(question)
        .then((answer) => {

            console.log("This is userChoice within .then |  " + answer.userChoice + "\n");
            nintendoSwitchCase(answer.userChoice); // basically the function manager. 

        })
}


popTheQuestion(questionArrayEmployees); // initiates everything when node index.js is ran. 


async function createDepartment() {

    const department = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "what department would you like to add?",

    }])
    await db.addDepartment(department);
    popTheQuestion;

}

async function createRoles() {


}

async function createEmployees() {


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







/* references */

/*

        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package

*/
