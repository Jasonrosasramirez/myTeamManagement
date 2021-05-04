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
    viewDepartmentBudget} = require("./peripherals/functions"); // imports all of the functins from functions.js


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
        return addEmployees();

        case "View Departments": 
        return viewDepartments();

        case "View Roles": 
        return viewRoles();

        case "View Employees": 
        return viewEmployees();

        case "Update Employee Role": 
        return updateEmployeeRole();

        case "Update Employee Manager": 
        return updateEmployeeManager();

        case "View Employee By Manager": 
        return viewEmployeeByManager();

        case "Delete Departments": 
        return deleteDepartments();

        case "Delete Roles": 
        return deleteRoles();

        case "Delete Employee": 
        return deleteEmployee();

        case "View Department Budget": 
        return viewDepartmentBudget();
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
