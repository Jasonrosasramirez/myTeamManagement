/* -- Entering Departments -- */

INSERT INTO department (departmentID, name)
VALUES (1, "engineering");

INSERT INTO department (departmentID, name)
VALUES (2, "regulatory");

INSERT INTO department (departmentID, name)
VALUES (3, "marketing");

INSERT INTO department (departmentID, name)
VALUES (4, "legal");


/* -- Entering Roles -- */
/* Engineers are departmentID 1 */

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (1, "Electrical Engineer", 60000, 1);

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (2, "Software Engineer", 80000, 1);

/* Regulatory is departmentID 2 */

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (3, "US Regulatory Specialist", 60000, 2);

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (4, "OUS Regulatory Specialist", 100000, 2);

/* Marketing is departmentID 3 */

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (5, "US Marketing Specialist", 60000, 3);

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (6, "OUS Marketing Specialist", 100000, 3);

/* Legal is departmentID 4 */

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (7, "IP Legal", 160000, 4);

INSERT INTO role (role_id, title, salary, departmentID)
VALUES (8, "injury Legal", 1100000, 4);


/* -- Entering Employees -- */

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Sora", "Anderson", 1, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (2, "Donald", "Duck", 2, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Goofy", "Goof", 3, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (4, "David", "Hayter", 4, 3);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Paz", "Ortiz", 5, NULL); 

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Donald", "Anderson", 6, 5);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (7, "Mickey", "Mouse", 7, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (8, "Bugs", "Bunny", 8, 7);






