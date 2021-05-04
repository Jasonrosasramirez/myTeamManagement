// All functions will be referenced by index.js
const connection = require("../db/SQLconnection");

class DB {

    constructor(connection) {
        this.connection = connection
    }

    // These three will get moved to functions.js eventually 
    addDepartment(dept) {
        console.log("The addDepartment  has been accessed :) ");

        return this.connection.query(
            "INSERT INTO department SET ?", dept
        );
    }


    addRoles(rol) {
        console.log("The addRoles  has been accessed :) ");

        return this.connection.query(
            "INSERT INTO roles SET ?", rol
        );


    }

    addEmployees(empl) {
        console.log("The addEmployees has been accessed :) ");

        return this.connection.query(
            "INSERT INTO employee SET ?", empl
        );

    }

    viewDepartments() {

    }


    viewRoles() {

    }

    viewEmployees() {

    }

    updateEmployeeRole() {

    }


    /* Bonus Stage */

    updateEmployeeManager() {

    }

    viewEmployeeByManager() {

    }

    deleteDepartments() {

    }

    deleteRoles() {

    }

    deleteEmployee() {

    }

    viewDepartmentBudget() {
        // allows the user to view the total salary of each employee per department
    }




}


module.exports = new DB(connection);

