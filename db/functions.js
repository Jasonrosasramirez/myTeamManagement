// All functions will be referenced by index.js
const connection = require("../config/SQLconnection.js"); // using the SQL database connection 


/* -- establishing db object --*/
class DB {
    constructor(connection) {
        this.connection = connection;
    }
}


/* -- database edit and search funtions --*/

/*

// add section
createEmployee(employee) {
    return this.connection.query("INSERT INTO employee set?", employee); // prompts into SQL language and uses the employee param to update
}

createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
}

createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
}

// view section
findEmployees() {
    return this.connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name;");
}

findRoles() {
    return this.connection.query(
        "SELECT role.id, role.title, department.name;");
}

findManagers() {
    return this.connection.query(
        "SELECT manager.id, manager.title, manager.name;");
}

*/

/* -- Export will be referenced by ../index.js -- */
module.exports = new DB(connection); // connection exported


/* 

class DB {

    constructor(connection) {
        this.connection = connection
    }

    // These three will get moved to functions.js eventually 
    async addDepartment(dep) {
        console.log("functions.js | addDepartment has been accessed ");
        return await this.connection.query(
            "INSERT INTO department SET ?", dep
        );

    }


    async addRoles(rol) {
        console.log("functions.js | addRoles has been accessed :) ");
        //return await this.connection.query(
             //"INSERT INTO roles SET ?", rol
         //);

    }

    async addEmployees(empl) {
         console.log("functions.js | addEmployees has been accessed :) ");
         //return await this.connection.query(
             //"INSERT INTO employee SET ?", empl
         //);

    }

    async viewDepartments(dep) {
        console.log("functions.js | viewDepartments has been accessed :) ");
         //return await this.connection.query(
             //"SHOW TABLES ?", dep
         //);
    }

    viewRoles(rol) {
        console.log("functions.js | viewRoles has been accessed :) ");
        //return await this.connection.query(
            //"SHOW TABLES ?", rol
        //);
    }

    viewEmployees(emp) {
        console.log("functions.js | viewRoles has been accessed :) ");
        //return await this.connection.query(
            //"SHOW TABLES ?", emp
        //);
    }

    updateEmployeeRole(upd) {
        console.log("functions.js | updateEmployeeRole has been accessed :) ");
        //return await this.connection.query(
            //"SHOW TABLES ?", upd
        //);
    }


    / Bonus Stage /

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

*/








