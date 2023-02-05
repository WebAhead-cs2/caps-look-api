const db = require('./database/connections')

export const createApplication = async (application_name, project_id) => {
  return await db.query(
    `INSERT INTO application (application_name,project_id) VALUES ($1,$2) RETURNING *`,
    [application_name, project_id]
  )
}
export const editApplication = async (id, application_name, project_id) => {
  return await db.query(
    `UPDATE application SET application_name= ($2),project_id=($3) WHERE id = ($1)`,
    [id, application_name, project_id]
  )
}
export const deleteApplication = async (id) => {
  return await db.query(`DELETE FROM application WHERE id = ($1)`, [id])
}
export const getApplications = async () => {
  const applicationTable = await db.query(`SELECT * FROM application`)
  return applicationTable.rows
}
