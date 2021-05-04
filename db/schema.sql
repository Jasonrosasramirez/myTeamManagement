-- syntax is written in mySQL. This will be the database. 
-- tables suggested by README. 

DROP DATABASE IF EXISTS teamDB;
CREATE DATABASE teamDB;  

USE teamDB;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, -- auto creates a new ID per employee entry. Cannot be empty. 
    first_name VARCHAR(30), -- accepts string values that are up to 30 characters in length. 
    last_name VARCHAR(30), 
    role_id INT, -- will be an integer.
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
    manager_id INT, 
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
    -- everything above will be a table column. 

    PRIMARY KEY (id) -- what the table will mostly sort by. 

)

CREATE TABLE department (
    id INT NOT NULL Auto_INCREMENT, 
    department_name VARCHAR(30), 

    PRIMARY KEY (id)
)

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30), 
    salaray DECIMAL, 
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE    

    Primary KEY (roleID)
)
