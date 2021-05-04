-- syntax is written in mySQL. This will be the database. 
-- tables suggested by README. 

DROP DATABASE IF EXISTS teamDB;
CREATE DATABASE teamDB;  

USE teamDB;

CREATE TABLE employee (
    employeeID INT NOT NULL AUTO_INCREMENT, -- auto creates a new ID per employee entry. Cannot be empty. 
    firstName VARCHAR(30), -- accepts string values that are up to 30 characters in length. 
    lastName VARCHAR(30), 
    roleID INT, -- will be an integer.
    managerID INT, 
    -- everything above will be a table column. 

    PRIMARY KEY (employeeID) -- what the table will mostly sort by. 
)

CREATE TABLE department (
    departmentID INT NOT NULL Auto_INCREMENT, 
    departmentName VARCHAR(30), 

    PRIMARY KEY (departmentID)

)


