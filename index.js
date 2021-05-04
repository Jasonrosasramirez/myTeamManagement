const inquirer = require("inquirer");   // allows node to prompt questions. 
const questionArrayEmployees = require("./peripherals/questions.js"); // references the questions array object on questions.js 

const {
    addDepartment, 
    addRoles, 
    addEmployees, 
    viewDepartments, 
    viewRoles, 
    viewEmployees, 
    updateEmployeeRole, 
    updateEmployeeManager, 
    viewEmployeeByManager, 
    deleteDepartments, 
    deleteRoles, 
    deleteEmployee, 
    viewDepartmentBudget} = require("./peripherals/functions");


/*  Question Building  */

function nintendoSwitchCase(userChoice) {
    console.log("userChoice within nintendoSwitchCase | " + userChoice);

    switch (userChoice) {
        // cleaner to read than a series of else if statements
        case "Add Department": 
        return addDepartment(); 

        case "Add Roles": 
        return addRoles();

        case "Add Employee": 
        return console.log("userChoice " + userChoice);

        case "View Departments": 
        return console.log("userChoice " + userChoice);

        case "View Roles": 
        return console.log("userChoice " + userChoice);

        case "View Employees": 
        return console.log("userChoice " + userChoice);

        case "Update Employee Role": 
        return console.log("userChoice " + userChoice);

        case "Update Employee Manager": 
        return console.log("userChoice " + userChoice);

        case "View Employee By Manager": 
        return console.log("userChoice " + userChoice);

        case "Delete Departments": 
        return console.log("userChoice " + userChoice);

        case "Delete Roles": 
        return console.log("userChoice " + userChoice);

        case "Delete Employee": 
        return console.log("userChoice " + userChoice);

        case "View Department Budget": 
        return console.log("userChoice " + userChoice);
    }
}

function popTheQuestion(question) { 
    // I prompt the questions array to the user :D 
    console.log("\nFunction popTheQuestion initiated"); 

    inquirer
    .prompt(question)
    .then((answer) => {     // a promise made here. Answers access the hash where the name is stored.

        console.log("This is userChoice within .then |  " + answer.userChoice + "\n");
        
        nintendoSwitchCase(answer.userChoice);

    })
}


popTheQuestion(questionArrayEmployees); // move me to the main function when you're done testing :) 






/* references */

/*

        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package

*/
