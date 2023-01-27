BEGIN;

DROP TABLE IF EXISTS employee, role, application, site, country, project, iteration, milestone, scrum, scrumEmployees CASCADE;

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone VARCHAR(255) NOT NULL,
  productivity VARCHAR (255) NOT NULL,
  site_id INTEGER REFERENCES site(id),
  role_id INTEGER REFERENCES role(id),
  project_id INTEGER REFERENCES project(id),
  scrum_id INTEGER REFERENCES scrum(id)
);

CREATE TABLE role (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE site (
   id SERIAL PRIMARY KEY,
   country_id INTEGER REFERENCES country(id),
   name TEXT
);

CREATE TABLE country (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE project (
   id SERIAL PRIMARY KEY,
   name TEXT,
   start_date date,
   end_date date
);

CREATE TABLE iteration (
   id SERIAL PRIMARY KEY,
   name TEXT,
   project_id INTEGER REFERENCES project(id),
   index VARCHAR(255)NOT NULL,
   start_date date,
   end_date date
);
-- "date" this format YYYY-MM-DD 

CREATE TABLE milestone (
   id SERIAL PRIMARY KEY,
   name TEXT,
   project_id INTEGER REFERENCES project(id),
   start_date date,
   end_date date,
   description TEXT
);

CREATE TABLE scrum (
   id SERIAL PRIMARY KEY,
   name TEXT,
  project_id INTEGER REFERENCES project(id),
  scrumEmployees_id INTEGER REFERENCES scrumEmployees(id)
);

CREATE TABLE scrumEmployees (
   id SERIAL PRIMARY KEY,
   scrum_master TEXT,
   employees_id json NOT NULL
);

commit;










