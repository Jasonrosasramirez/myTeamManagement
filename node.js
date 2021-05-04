/*  Link to my SQL Server  */
const mysql = require("mysql"); // brings in the mySQL library. 

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






/*  installation  */
/*
.used npm install mysql before writing any code. 
.was originally part of index.js but I moved this over. 
.
.
.
*/