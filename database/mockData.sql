
BEGIN

--country inserts 
INSERT INTO country (country_name) VALUES ('israel'),('india');

--site
INSERT INTO site (site_name, country_id) VALUES ('Nazareth',1),('Rannana',1),('Pune',2);

--role
INSERT INTO role (role_name) VALUES ('scrum_master'),('resource_manager'),('project_manager'),('developer'),('tester');

--project
INSERT INTO project (project_name, pi_start_date, pi_end_date) VALUES ('OSM','2021-08-17','2021-10-04'),('OSO','2022-06-15','2022-9-20'),('ARM','2021-05-21','2021-7-31'),('T1','2022-01-10','2022-05-09'),('PLTD','2022-04-25','2022-08-03');

--iteration
INSERT INTO iteration (iteration_name, project_id, index, iteration_start_date, iteration_end_date) VALUES ('iteration-27',1,'1','2021-08-17','2021-09-06'),('iteration-27',1,'2','2021-09-07','2021-09-13'),('iteration-28',1,'1','2021-09-14','2021-10-04');

--milestone
INSERT INTO milestone (milestone_name, project_id, milestone_date, description) VALUES ('pi3-deployment',1,'2021-08-17','the deployment of the third pi'),('pi3-cut-off',1,'2021-10-04','the cut-off of the third pi');

--scrum
INSERT INTO scrum (scrum_name, scrum_master_id, project_id) VALUES ('Agno', '69807',1),('Panay', '102954',3);

--employees
INSERT INTO employee (idNumber, employee_name, email, phone, productivity, site_id, role_id, project_id, scrum_id) VALUES 
('69807','emp', '1@gmail.com','0501234567', '50', 3,1,1,1 ), 
('95384','emp', '2@gmail.com','0501234567', '0', 3,4,1,1),
('159556','emp', '3@gmail.com','0501234567', '90', 3,4,1,1),
('148725','emp', '4@gmail.com','0501234567', '90', 3,4,1,1),
('153117','emp', '5@gmail.com','0501234567', '90', 3,4,1,1),
('159808','emp', '6@gmail.com','0501234567', '0', 3,4,1,1),
('102589','emp', '7@gmail.com','0501234567', '90', 3,5,1,1),
('69807','emp', '8@gmail.com','0501234567', '50', 1,1,3,2), 
('12345','emp', '9@gmail.com','0501234567', '0', 1,4,3,2),
('234567','emp', '10@gmail.com','0501234567', '80', 3,4,3,2),
('87654','emp', '11@gmail.com','0501234567', '90', 3,4,3,2),
('4560987','emp', '12@gmail.com','0501234567', '70', 3,4,3,2),
('8765098','emp', '13@gmail.com','0501234567', '0', 3,4,3,2),
('234567','emp', '14@gmail.com','0501234567', '90', 3,5,3,2);

commit;