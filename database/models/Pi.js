const db = require('../connection')

const createPi = async (pi_name, project_id) => {
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

module.exports = {
  createPi,
  editPi,
  archivePi,
  getPis
}
