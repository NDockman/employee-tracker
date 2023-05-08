
INSERT INTO department (name)
VALUES
("Human Resources"),
("Finance"),
("Engineering"),
("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES
("HR Specialist", 30000, 1),
("Exchequer", 80000, 2),
("Software Engineer", 100000, 3),
("Senior Developer", 150000, 3),
("Marketing Strategist", 60000, 4),
("Marketing Associate", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Steve", "Johnson", 4, 1),
("Abe", "Lincoln", 1, 2),
("Will", "Smith", 5, 3),
("Sam", "Maxwell", 2, 4),
("Jane", "Doe", 6, 3),
("Louis", "Green", 3, 1);