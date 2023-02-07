const db = require('../connection')

const createEmployee = async (
  employee_name,
  id_number,
  mail,
  phone,
  productivety,
  site_id,
  job_id,
  access_tier,
  project_id
) => {
  return await db.query(
    `INSERT INTO employee (employee_name,
    id_number,
    email,
    phone,
    productivety,
    site_id,
    job_id,
    access_tier,
    project_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
    [
      employee_name,
      id_number,
      mail,
      phone,
      productivety,
      site_id,
      job_id,
      access_tier,
      project_id
    ]
  )
}
const editEmployee = async (
  id,
  employee_name,
  id_number,
  mail,
  phone,
  productivety,
  site_id,
  job_id,
  access_tier,
  project_id
) => {
  return await db.query(
    `UPDATE employee SET employee_name= ($2),id_number=($3),email=($4),phone=($5),productivety=($6),site_id=($7),job_id=($8),access_tier=($9),project_id=($10) WHERE id = ($1)`,
    [
      id,
      employee_name,
      id_number,
      mail,
      phone,
      productivety,
      site_id,
      job_id,
      access_tier,
      project_id
    ]
  )
}
const deleteEmployee = async (id) => {
  return await db.query(`DELETE FROM employee WHERE id = ($1)`, [id])
}
const getEmployees = async () => {
  const employeeTable = await db.query(`SELECT * FROM employee`)
  return employeeTable.rows
}
module.exports = { createEmployee, editEmployee, deleteEmployee, getEmployees }
