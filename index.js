const inquirer = require("inquirer");   // allows node to prompt questions. 

/* Importing the function from user choices */

//import function  


/*  Question Building  */

const questionArrayTest = [

    // not to be used in the final version :) I'm just here to help
    {
        name: "userChoice", 
        type: "list", 
        message: "Which pill will you take?",
        choices: ["red pill", "blue pill", "reddit pill"]
    }

]

const questionArrayEmployees = [

    // not to be used in the final version :) I'm just here to help
    {
        name: "userChoice", 
        type: "list", 
        message: "Hey there! How will you arrange the employees?",
        choices: ["red pill", "blue pill", "reddit pill"]
    }

]

function popTheQuestion(question) { 
    // I prompt the questions array to the user :D 
    console.log("\nFunction popTheQuestion initiated"); 

    inquirer
    .prompt(question)
    .then((answer) => {     // a promise made here. Answers access the hash where the name is stored.

        console.log("Hello there. This is userChoice |  " + answer.userChoice + "\n");
            
        // https://www.npmjs.com/package/inquirer
        // https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package
    })

}


popTheQuestion(questionArrayEmployees); // move me to the main function when you're done testing :) 
