BEGIN;

DROP TABLE IF EXISTS employee, role, application, site, country, project, iteration, milestone, scrum CASCADE;

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone VARCHAR(255) NOT NULL,
  productivity VARCHAR (255) NOT NULL,
  site_id INTEGER REFERENCES site(id),
  role_id INTEGER REFERENCES role(id),
  country_id INTEGER REFERENCES country(id),
  project_id INTEGER REFERENCES project(id),
  scrum_id INTEGER REFERENCES scrum(id),
  application_id INTEGER REFERENCES application(id)
);

CREATE TABLE role (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE application (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE site (
   id SERIAL PRIMARY KEY,
   country_id INTEGER REFERENCES country(id),
   location TEXT
);

CREATE TABLE country (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE project (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE iteration (
   id SERIAL PRIMARY KEY,
   name TEXT,
   project_id INTEGER REFERENCES project(id)
);

CREATE TABLE milestone (
   id SERIAL PRIMARY KEY,
   name TEXT,
   date TEXT,
   project_id INTEGER REFERENCES project(id)
);

CREATE TABLE scrum (
   id SERIAL PRIMARY KEY,
   name TEXT,
   application_id INTEGER REFERENCES application(id)
);

commit;










