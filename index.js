/*   Referemces to nmp Packages/ installations   */

const mysql = require("mysql");
const inquirer = require("inquirer");


/*  Link to my SQL Server  */

const connection = mySql.createConnection({

    host: "localhost",
    port: process.env.PORT || 3000,
    user: "root",
    password: "Sequelites!8011", 
    database: "testSystem"

    
}); 