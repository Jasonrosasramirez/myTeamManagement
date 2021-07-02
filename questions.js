const questionArrayEmployees = [

    {
        name: "userChoice", 
        type: "list", 
        message: "Hey there! What will it be today?",
        choices: [
            
            "Add Employees",
            "Add Roles",
            "Add Department",
            "View Employees", 
            "View Roles", 
            "View Departments",
            "Update Employee Role", 
            "Exit Now",
        ],
    }
]

module.exports = questionArrayEmployees;




/*

former questions section below

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
        "View Employees", 
        "Update Employee Role", 
        "Update Employee Manager", 
        "View Employee By Manager", 
        "Delete Departments", 
        "Delete Roles", 
        "Delete Employee", 
        "View Department Budget"
    ]
}

*/