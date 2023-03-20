const db = require('../connection')

const createCapacity = async (
  productivity,
  availability,
  employee_id,
  total_capacity
) => {
  return await db.query(
    `INSERT INTO capacity (productivity,
        availability,
        employee_id,
        total_capacity) VALUES ($1,$2,$3,$4) RETURNING *`,
    [productivity, availability, employee_id, total_capacity]
  )
}
const editCapacity = async (
  id,
  productivity,
  availability,
  employee_id,
  total_capacity
) => {
  return await db.query(
    `UPDATE capacity SET productivity=($2),
    availability=($3),
    employee_id=($4),
    total_capacity=($5) WHERE id = ($1)`,
    [id, productivity, availability, employee_id, total_capacity]
  )
}
const deleteCapacity = async (id) => {
  return await db.query(`DELETE FROM capacity WHERE id = ($1)`, [id])
}

const getItrationsDetails = async (id) => {
  const capacityTable = await db.query(
    `select  iteration.id, iteration.iteration_name,iteration.project_id, iteration.iteration_number,
     iteration.iteration_start_date, iteration.iteration_end_date,
      project.project_name from iteration inner join project on project.id = iteration.project_id AND iteration.project_id=$1`,
    [id]
  )
  return capacityTable.rows
}

const getScrumCapacityPerIterationsQuery = async (project_id, scrum_id) => {
  const capacityTable = await db.query(
    `select iteration.id, iteration.iteration_name,iteration.project_id, iteration.iteration_number,
     iteration.iteration_start_date, iteration.iteration_end_date,
      project.project_name from iteration inner join project on project.id = iteration.project_id AND iteration.project_id=$1`,
    [project_id, scrum_id]
  )
  return capacityTable.rows
}

const getIterationByPiQuery = async (scrum_ids, pi_from, pi_to) => {
  const capacityScrumTable = []
  for (let i = pi_from; i <= pi_to; i++) {
    query = await db.query(
      `select iteration_name,iteration_number,iteration_start_date,iteration_end_date from iteration where pi_id=$1`,
      [i]
    )
    capacityScrumTable.push(query.rows)
  }
  return capacityScrumTable
}

const getEmployeeAvailablity = async (scrumId) => {
  const employee_data = await db.query(
    `SELECT employee.id, employee.id_number, employee.employee_name, employee.weekend_days, employee.productivity, site.site_name, site.country_name, job.job_name, application.application_name FROM employee INNER JOIN employee_scrum on employee.id = employee_id LEFT JOIN scrum on scrum.id = employee_scrum.scrum_id LEFT JOIN application ON application.id = scrum.application_id LEFT JOIN site ON site.id = employee.site_id LEFT JOIN job ON job.id = employee.job_id where employee_scrum.scrum_id=($1)`,
    [scrumId]
  )
  return employee_data
}

const getEmployeeAbsences = async (id) => {
  const employee_absence = await db.query(
    `select employee_absence.id,employee_absence.employee_id,absence_types.absence_type, employee_absence.absence_type_start_date,employee_absence.absence_type_end_date,employee_absence.cause from employee_absence inner join absence_types ON absence_types.id = employee_absence.absence_type_id inner join employee on employee_absence.employee_id=employee.id where employee_id=($1)`,
    [id]
  )

  const absences = await db.query(
    `select absence.absence_name,employee.id as employee_id, absence.absence_start_date, absence.absence_end_date,absence.mandatory from absence inner join employee on employee.site_id = absence.site_id where employee.id=($1) `,
    [id]
  )
  const response = {
    employee_id: id,
    employee_absence: employee_absence.rows,
    absences: absences.rows
  }
  return response
}

module.exports = {
  createCapacity,
  editCapacity,
  deleteCapacity,
  getItrationsDetails,
  getScrumCapacityPerIterationsQuery,
  getIterationByPiQuery,
  getEmployeeAvailablity,
  getEmployeeAbsences
}
