-- syntax is written in mySQL. This will be the database. 
-- tables suggested by README. 

DROP DATABASE IF EXISTS teamDB;
CREATE DATABASE teamDB;  

USE teamDB;

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT, -- auto creates a new ID per employee entry. Cannot be empty. 
    first_name VARCHAR(30) NOT NULL, -- accepts string values that are up to 30 characters in length. 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT UNSIGNED NOT NULL, -- will be an integer.
    INDEX role_ind (role_id), 
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE, 
    manager_id INT UNSIGNED, 
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE, 
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE, 
    -- everything above will be a table column. 

    PRIMARY KEY (id) -- what the table will mostly sort by. 

);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    department_name VARCHAR(30), 
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL, 
    salaray DECIMAL UNSIGNED NOT NULL, 
    department_id INT UNSIGNED NOT NULL, 
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE,  

    Primary KEY (roleID)
  
);