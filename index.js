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

    // not to be used in the final version :) I'm just here to help

    { 
        type: "input",  // input type.
        message: "How was your day today?", // the question that will be prompted 
        name: "question1" // how it will be stored in the hash. 
    }, 

    {
        type: "list", // This will be multiple choice here 
        message: "which pill will you take?",
        name: "question2",  // stored in the hash as a different variable. 
        choices: ["red pill", "blue pill"]  //  the multiple choice selection.  
    }

]

function popTheQuestions() { 

    // I prompt the questions array to the user :D 

    inquirer
    .prompt(testQuestion)
    .then((answer) => {     // a promise made here. Answers access the hash where the name is stored.

        console.log("Let's see what this does.");
        console.log(answer.question1); 
        
        // https://www.npmjs.com/package/inquirer
    })

}

poptheQuestions(); 