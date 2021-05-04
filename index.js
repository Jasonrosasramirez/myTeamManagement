const inquirer = require("inquirer");   // allows node to prompt questions. 

/* Importing the function from user choices */

function addDepartment () {
    console.log("The addDepartment Function has been accessed :) ");
}


/*  Question Building  */

const questionArrayEmployees = [

    {
        name: "userChoice", 
        type: "list", 
        message: "Hey there! What will it be today?",
        choices: [
            "Add Department", 
            "Add Roles", 
            "Add Employee", 
            "View Departments", 
            "View Roles", 
            "View Employees"
        ]
    }
]

function nintendoSwitchCase(userChoice) {
    console.log("\nFunction nintendoSwitchCase activated");
    console.log("userChoice within switch case | " + userChoice);


}

function popTheQuestion(question) { 
    // I prompt the questions array to the user :D 
    console.log("\nFunction popTheQuestion initiated"); 

    inquirer
    .prompt(question)
    .then((answer) => {     // a promise made here. Answers access the hash where the name is stored.

        console.log("This is userChoice |  " + answer.userChoice + "\n");
        
        nintendoSwitchCase(answer.userChoice);

    })

}


popTheQuestion(questionArrayEmployees); // move me to the main function when you're done testing :) 






/* references */

/*

        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package

*/
