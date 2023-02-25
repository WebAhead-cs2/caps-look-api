BEGIN;
--site
INSERT INTO site (site_name, country_name) VALUES ('Nazareth','israel'),('Rannana','israel'),('Pune','india');
--project
INSERT INTO project (project_name,planned_site_mix,start_date,project_pis_count) VALUES
('VR','{"Nazareth":"10","Pune":"5"}','2021-08-17',4),('SES','{"Nazareth":"12","Rannana":"2"}','2021-05-10',4),
('ARM','{"Rannana":"4","Pune":"10"}','2022-03-25',4),('OPTIMA','{"Nazareth":"15","Pune":"6"}','2022-07-27',4);
--application
INSERT INTO application (application_name, project_id) VALUES
('OMS',1),('ODB',1),('T1',3),('V3',3),('OSO',2),('ODO',2),('PLTD',4);

--PI
INSERT INTO pi (pi_name, project_id,project_iterations_count) VALUES 
('PI-11',1,3),('PI-12',1,2),('PI-13',1,2),('PI-14',1,1),
('PI-21',2,2),('PI-22',2,2),('PI-23',2,2),('PI-24',2,2),
('PI-31',3,2),('PI-32',3,2),('PI-33',3,2),('PI-34',3,3),
('PI-41',4,3),('PI-42',4,3),('PI-43',4,3),('PI-44',4,3);


--iteration
INSERT INTO iteration (iteration_name, project_id, pi_id, iteration_number, iteration_start_date, iteration_end_date) VALUES 
('iteration-27',1,1,1,'2021-08-17','2021-09-06'),
('iteration-19',1,1,2,'2021-09-07','2021-09-13'), 
('iteration-28',1,1,3,'2021-09-14','2021-10-04'),

('iteration-29',1,2,1,'2021-05-10','2021-05-17'),
('iteration-22',1,2,2,'2021-06-08','2021-07-01'),

('iteration-26',1,3,2,'2022-05-20','2021-06-25'),
('iteration-25',1,3,1,'2022-03-25','2022-04-08'),

('iteration-30',1,4,1,'2022-07-27','2022-08-15'),

('iteration-51',2,5,2,'2021-07-02','2021-07-15'),
('iteration-52',2,5,1,'2021-05-18','2021-06-07'),

('iteration-53',2,6,1,'2022-04-09','2022-05-01'),
('iteration-54',2,6,2,'2022-06-26','2022-07-20'),

('iteration-55',2,7,1,'2022-01-16','2022-10-01'),
('iteration-56',2,7,2,'2021-06-08','2021-07-01'),

('iteration-663',2,8,1,'2022-02-20','2021-02-25'),
('iteration-234',2,8,2,'2022-03-25','2022-04-08'),

('iteration-3656',3,9,1,'2022-07-27','2022-08-15'),

('iteration-2156',3,9,2,'2021-07-02','2021-07-15'),
('iteration-2450',3,10,1,'2021-05-18','2021-06-07'),

('iteration-244',3,10,2,'2022-04-09','2022-05-01'),
('iteration-323',3,11,1,'2022-03-16','2022-05-20'),
('iteration-2365',3,11,2,'2022-05-06','2022-06-21'),

('iteration-294',3,12,1,'2022-04-09','2022-05-11'),
('iteration-2873',3,12,2,'2022-05-26','2022-03-23'),
('iteration-2398',3,12,3,'2022-04-23','2022-06-10'),

('iteration-24124',4,13,1,'2022-04-09','2022-05-01'),
('iteration-2353',4,13,2,'2022-05-20','2022-07-20'),
('iteration-23463',4,13,3,'2022-04-20','2022-07-20'),

('iteration-246',4,14,1,'2022-04-09','2022-05-01'),
('iteration-2473',4,14,2,'2022-06-26','2022-07-20'),
('iteration-2367',4,14,3,'2022-06-26','2022-07-20'),

('iteration-24',4,15,1,'2022-03-09','2022-05-11'),
('iteration-23',4,15,2,'2022-05-26','2022-08-30'),
('iteration-23',4,15,3,'2022-06-23','2022-09-24'),

('iteration-24',4,16,1,'2022-04-19','2022-06-27'),
('iteration-23',4,16,2,'2022-06-24','2022-08-14'),
('iteration-23',4,16,3,'2022-06-02','2022-06-26');
--milestone
INSERT INTO milestone (milestone_name, project_id, milestone_start_date,milestone_end_date, description) VALUES 
('pi27-deployment',1,'2021-08-17','2021-08-27','the deployment of pi 27'),
('pi27-release',1,'2021-09-06','2021-09-16','the first version release'),
('pi27-cut-off',1,'2021-09-13','2021-09-23','the cut-off of pi 27'),
('pi28-deployment',1,'2021-09-14','2021-09-24','the deployment of pi 27'),
('pi28-features',1,'2021-09-26','2021-09-30','adding some features'),
('pi28-cut-off',1,'2021-10-04','2021-10-14','the cut-off of pi 28'),

('pi20-deployment',2,'2021-05-10','2021-05-20','the deployment of pi 20'),
('pi20-release',2,'2021-05-20','2021-05-25','the first version release'),
('pi20-cut-off',2,'2021-07-01','2021-07-21','the cut-off of pi 20'),
('pi21-deployment',2,'2021-07-02','2021-07-22','the deployment of pi 21'),
('pi21-features',2,'2021-07-10','2021-07-20','adding some features'),
('pi21-cut-off',2,'2021-07-15','2021-07-25','the cut-off of pi 21'),

('pi25-deployment',3,'2022-03-25','2022-03-30','the deployment of pi 25'),
('pi25-release',3,'2022-04-15','2022-04-25','the first version release'),
('pi25-cut-off',3,'2022-05-01','2022-05-11','the cut-off of pi 25'),
('pi26-deployment',3,'2022-05-20','2022-05-25','the deployment of pi 26'),
('pi26-features',3,'2022-06-30','2022-07-10','adding some features'),
('pi26-cut-off',3,'2022-07-20','2022-07-25','the cut-off of pi 26'),

('pi30-deployment',4,'2022-07-27','2022-07-30','the deployment of pi 30'),
('pi30-release',4,'2022-08-20','2022-08-28','the first version release'),
('pi30-cut-off',4,'2022-09-01','2022-09-11','the cut-off of pi 30');

--job
INSERT INTO job (job_name) VALUES ('scrum master'),('developer'),('scrum tester'),('manager'),('architect'),('specialist');
--employees
INSERT INTO employee (id_number, employee_name, email, phone, productivity, site_id, job_id, project_id, access_tier) VALUES
('69807','Majd', 'majd@gmail.com','0501234567', '50', 3,1,1,'scrum_master'),
('95384','Haitham', 'haitham@gmail.com','0501234567', '0', 3,2,1,'no_access'),
('159556','Yosra', 'yosra@gmail.com','0501234567', '90', 3,2,1,'no_access'),
('148725','Saher', 'saher@gmail.com','0501234567', '90', 3,2,1,'no_access'),
('153117','Joumana', 'joumana@gmail.com','0501234567', '90', 3,2,1,'no_access'),
('159808','Noor', 'noor@gmail.com','0501234567', '0', 3,2,1,'no_access'),
('102589','Mahmood', 'mahmood@gmail.com','0501234567', '90', 3,3,1,'no_access'),
('456714', 'Mario', 'mario@gmail.com','0501234567', '50', 3,1,2,'scrum_master'),
('09876', 'Amal', 'amal@gmail.com','0501234567', '0', 3,6,2,'no_access'),
('123456', 'Hani', 'hani@gmail.com','0501234567', '70', 1,2,2,'no_access'),
('24678', 'Ahmad', 'ahmad@gmail.com','0501234567', '90', 1,2,2,'no_access'),
('1684334', 'Moayad', 'moayad@gmail.com','0501234567', '90', 1,2,2,'no_access'),
('98652', 'Salma', 'salma@gmail.com','0501234567', '0', 1,5,2,'no_access'),
('116884', 'Mohammed Awawdy', 'awawdy@gmail.com','0501234567', '90', 1,3,2,'no_access'),
('69807','Tawfik', 'tawfik@gmail.com','0501234567', '50', 1,1,3,'scrum_master'),
('12345','Leen', 'leen@gmail.com','0501234567', '0', 1,4,3,'no_access'),
('234567','Helal', 'helal@gmail.com','0501234567', '80', 3,2,3,'no_access'),
('87654','Wael', 'wael@gmail.com','0501234567', '90', 3,2,3,'no_access'),
('4560987','Mohammed Zoabi', 'zoabi@gmail.com','0501234567', '70', 3,2,3,'no_access'),
('8765098','Astbrq', 'astbrq@gmail.com','0501234567', '0', 3,5,3,'no_access'),
('234567','Souhel', 'souhel@gmail.com','0501234567', '90', 3,3,3,'no_access'),
('754325', 'Riham', 'riham@gmail.com','0501234567', '50', 3,1,4,'scrum_master'),
('14262', 'Ghazi', 'ghazi@gmail.com','0501234567', '0', 3,6,4,'no_access'),
('09873', 'Asmaa', 'asmaa@gmail.com','0501234567', '80', 1,2,4,'no_access'),
('246782', 'Nur', 'nur@gmail.com','0501234567', '90', 1,2,4,'no_access'),
('098765', 'Samar', 'samar@gmail.com','0501234567', '0', 1,2,4,'no_access'),
('383216', 'Naim', 'naim@gmail.com','0501234567', '90', 1,5,4,'no_access'),
('976431', 'abdalla', 'abdalla@gmail.com','0501234567', '90', 1,3,4,'no_access'),
('000000', 'Khalid', 'khalid@gmail.com','0501234567', '0', 3,1,null,'resource_manager'),
('111111', 'Sally', 'sally@gmail.com','0501234567', '0', 3,1,null,'project_manager');
--scrum
INSERT INTO scrum (scrum_name, scrum_master_id, project_id, application_id) VALUES
('Agno', 1, 1, 1),('sky', 15,2,5),('Panay', 8,3,3),('Jalapeos', 22,4,7);
--employee_scrum
INSERT INTO employee_scrum (employee_id, scrum_id) VALUES
(1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),
(8,3),(9,3),(10,3),(11,3),(12,3),(13,3),(14,3),
(15,2),(16,2),(17,2),(18,2),(19,2),(20,2),(21,2),
(22,4),(23,4),(24,4),(25,4),(26,4),(27,4),(28,4);
--users
INSERT INTO users (employee_id, email, password) VALUES
(1, 'majd@gmail.com', '$2b$10$P6Qy.j8DI5BtKYi08/UGhuQ94QDDVmhNNObW3gvDtSrO6OB2n.x96'),      --password: "majd"
(8, 'mario@gmail.com', '$2b$10$JJXMcAAyAvKhAnHmOjY5TuKKxNNv20YwRnQZtDXKICT2ZVkRGiv2a'),     --password: "mario"
(15, 'tawfik@gmail.com', '$2b$10$6YCWLAGC7b9wS12TS8H5VOEEeG0v989fyc9TWuPDw9FIV87dL3arC'),   --password: "tawfik"
(22, 'riham@gmail.com', '$2b$10$lR.Tp43V5wcQXG33nZetOe5cQ/rhQ6PpuBhPfKvVsPHhl8jSc1PMm'),    --password: "riham"
(29, 'khalid@gmail.com', '$2b$10$5ZXDDayBVkmROPxSPXpdXeBHEVzL.hQtWirCEr.pLQqxpS89.YrOG'),   --password: "khalid"
(30, 'sally@gmail.com', '$2b$10$w.bzMY3RLihEHB.Xm9KdHedzp1dONPQcrJtdm3XmKjZbt4WVusHZe');    --password: "sally"
-- absence
INSERT INTO absence (absence_name, site_id, mandatory, absence_start_date, absence_end_date) VALUES
('Christmas', 1, 'mandatory','2023-12-25','2023-12-31'),
('Christmas', 2, 'mandatory','2023-12-25','2023-12-31'),
('Christmas', 3, 'optional','2023-12-25','2023-12-31'),
('Kippur', 1, 'optional','2023-09-24','2023-09-25'),
('Kippur', 2, 'optional','2023-09-24','2023-09-25'),
('Easter', 1, 'mandatory','2023-04-09','2023-04-16'),
('Easter', 2,'mandatory','2023-04-09','2023-04-16'),
('Easter', 3, 'optional','2023-04-09','2023-04-16'),
('Diwali', 3, 'mandatory', '2023-11-10','2023-11-14'),
('Passover', 1, 'optional','2023-04-09','2023-04-16'),
('Passover', 2, 'mandatory','2023-04-09','2023-04-16');
commit;