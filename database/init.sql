BEGIN;

DROP TABLE IF EXISTS employee, role, application, site, country, project, iteration, milestone, scrum CASCADE;

CREATE TABLE role (
   id SERIAL PRIMARY KEY,
   role_name TEXT
   );

CREATE TABLE country (
   id SERIAL PRIMARY KEY,
   country_name TEXT
);

CREATE TABLE site (
   id SERIAL PRIMARY KEY,
   site_name TEXT,
   country_id INTEGER REFERENCES country(id)
);


CREATE TABLE project (
   id SERIAL PRIMARY KEY,
   project_name TEXT,
   pi_start_date DATE,
   pi_end_date DATE
);

CREATE TABLE iteration (
   id SERIAL PRIMARY KEY,
   iteration_name TEXT,
   project_id INTEGER REFERENCES project(id),
   index VARCHAR(255)NOT NULL,
   iteration_start_date DATE,
   iteration_end_date DATE
);
-- "date" this format YYYY-MM-DD 

CREATE TABLE milestone (
   id SERIAL PRIMARY KEY,
   milestone_name TEXT,
   project_id INTEGER REFERENCES project(id),
   milestone_date DATE,
   description TEXT
);

CREATE TABLE scrum (
  id SERIAL PRIMARY KEY,
  scrum_name TEXT,
  scrum_master_id VARCHAR(15),
  project_id INTEGER REFERENCES project(id)
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  idNumber VARCHAR(15),
  employee_name TEXT,
  email TEXT,
  phone VARCHAR(15) NOT NULL,
  productivity VARCHAR (10) NOT NULL,
  site_id INTEGER REFERENCES site(id),
  role_id INTEGER REFERENCES role(id),
  project_id INTEGER REFERENCES project(id),
  scrum_id INTEGER REFERENCES scrum(id)
);

commit;















