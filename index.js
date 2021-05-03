/*   Referemces to nmp Packages/ installations   */

const inquirer = require("inquirer");   // allows node to prompt questions. 
const mysql = require("mysql"); // brings in the mySQL library. 


/*  Link to my SQL Server  */

const connectionToMySQL = mySql.createConnection({

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

const testQuestion = [

    { 
        type: "input",
        message: "How was your day today?",
        name: "question1"
    }, 

    {
        type: "list", 
        message: "which pill will you take?",
        name: "question2", 
        choices: ["red pill", "blue pill"]  
    }

]

function popTheQuestions() { 


}