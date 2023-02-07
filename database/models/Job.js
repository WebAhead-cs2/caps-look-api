const db = require('./database/connections')

export const createJob = async (job_name) => {
  return await db.query(`INSERT INTO job (job_name) VALUES ($1) RETURNING *`, [
    job_name
  ])
}
export const editJob = async (id, job_name) => {
  return await db.query(`UPDATE job SET job_name= ($2) WHERE id = ($1)`, [
    id,
    job_name
  ])
}
export const deleteJob = async (id) => {
  return await db.query(`DELETE FROM job WHERE id = ($1)`, [id])
}
export const getJobs = async () => {
  const jobTable = await db.query(`SELECT * FROM job`)
  return jobTable.rows
}
