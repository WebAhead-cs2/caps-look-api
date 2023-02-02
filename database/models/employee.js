const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createEmployee = (
  first_name,
  idnumber,
  mail,
  phone,
  productivety,
  site_id,
  job_id,
  accesstier,
  project_id,
  scrum_id
) => {
  db.query(
    `INSERT INTO employee (first_name,
    idnumber,
    email,
    phone,
    productivety,
    site_id,
    job_id,
    accesstier,
    project_id,
    scrum_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
    [
      first_name,
      idnumber,
      mail,
      phone,
      productivety,
      site_id,
      job_id,
      accesstier,
      project_id,
      scrum_id,
    ]
  );
};
export const editEmployee = (
  id,
  first_name,
  idnumber,
  mail,
  phone,
  productivety,
  site_id,
  job_id,
  accesstier,
  project_id,
  scrum_id
) => {
  db.query(
    `UPDATE employee SET first_name= ($2),idnumber=($3),email=($4),phone=($5),productivety=($6),site_id=($7),job_id=($8),accesstier=($9),project_id=($10),scrum_id=($11) WHERE id = ($1)`,
    [
      id,
      first_name,
      idnumber,
      mail,
      phone,
      productivety,
      site_id,
      job_id,
      accesstier,
      project_id,
      scrum_id,
    ]
  );
};
export const deleteEmployee = (id) => {
  db.query(`DELETE FROM employee WHERE id = ($1)`, [id]);
};
export const getEmployees = async () => {
  let employeeTable = await db.query(`SELECT * FROM employee`);
  return employeeTable.rows;
};
