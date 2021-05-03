/*   Referemces to nmp Packages/ installations   */

const inquirer = require("inquirer");   // allows node to prompt questions. 
const mysql = require("mysql"); // brings in the mySQL library. 


/*  Link to my SQL Server  */

const connectionToMySQL = mysql.createConnection({

    host: "localhost",
    port: process.env.PORT || 3000, // needed to create multiple sessions on this port. 
    user: "root",
    password: "Sequelites!8011", // unique per person 
    database: "employeeDatabase" // the database for this assignment

    // an object containing information to log into the mysql database. 
    // https://www.w3schools.com/nodejs/nodejs_mysql.asp
}); 

connectionToMySQL.connect(function(err) {

    if (err) throw err; 
    console.log("Success! You have been connected to the employeeDatabase.");

    // prompts an error or reassuring method for a connection attempt :) 
    // https://www.w3w3schools.com/nodejs/nodejs_mysql.asp
});


/* Here is where we ask the user input */

const testQuestionArray = [

    // not to be used in the final version :) I'm just here to help
    {
        name: "userChoice", 
        type: "list", 
        message: "Which pill will you take?",
        choices: ["red pill", "blue pill", "reddit pill"]
    }

]

function popTheQuestion() { 

    // I prompt the questions array to the user :D 

    inquirer
    .prompt(testQuestionArray)
    .then((answer) => {     // a promise made here. Answers access the hash where the name is stored.

        console.log("hello there " + answer.userChoice);
            
        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package
    })

}

popTheQuestion(); 


/*  Here is where we define the actions based on the user input choice  */

function addDepartment () {


}

function addRoles () {

   
}

function addEmployees () {

}

function viewDepartments () { 


}

function viewRoles () { 


}

function viewEmployees () {


}

function updateEmployeeRole () {


}


 