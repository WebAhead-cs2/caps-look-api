const db = require('../connection')

const createPi = async (pi_name, project_id) => {
  await db.query(
    'UPDATE project SET project_pis_count = COALESCE(project_pis_count,0) + 1 WHERE id=($1)',
    [project_id]
  )
  return await db.query(
    `INSERT INTO pi (pi_name,project_id) VALUES ($1,$2) RETURNING *`,
    [pi_name, project_id]
  )
}
const editPi = async (id, pi_name, project_id) => {
  return await db.query(
    `UPDATE pi SET pi_name= ($2),project_id=($3)
  WHERE id = ($1)`,
    [id, pi_name, project_id]
  )
}
const archivePi = async (id) => {
  return await db.query(`UPDATE pi SET isarchived=true WHERE id = ($1)`, [id])
}
const getPis = async () => {
  const piTable = await db.query(`SELECT * FROM pi`)
  return piTable.rows
}
const getPisProject = async (project_id) => {
  const PisProjectTable = await db.query(
    `SELECT * FROM pi WHERE project_id=($1) AND isarchived=false`,
    [project_id]
  )
  return PisProjectTable.rows
}
module.exports = {
  createPi,
  editPi,
  archivePi,
  getPis,
  getPisProject
}
