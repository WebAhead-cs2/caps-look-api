const db = require('../connection')

const createIteration = async (
  iteration_name,
  project_id,
  pi_id,
  iteration_number,
  iteration_start_date,
  iteration_end_date
) => {
  return await db.query(
    `INSERT INTO iteration (iteration_name,project_id,pi_id, iteration_number,
      iteration_start_date,
      iteration_end_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [
      iteration_name,
      project_id,
      pi_id,
      iteration_number,
      iteration_start_date,
      iteration_end_date
    ]
  )
}
const editIteration = async (
  id,
  iteration_name,
  project_id,
  pi_id,
  iteration_number,
  iteration_start_date,
  iteration_end_date
) => {
  return await db.query(
    `UPDATE iteration SET iteration_name= ($2),project_id=($3) ,pi_id=($4),iteration_number=($5),
  iteration_start_date=($6),
  iteration_end_date=($7) WHERE id = ($1)`,
    [
      id,
      iteration_name,
      project_id,
      pi_id,
      iteration_number,
      iteration_start_date,
      iteration_end_date
    ]
  )
}
const archiveIteration = async (id) => {
  return await db.query(
    `UPDATE iteration SET isarchived=true WHERE id = ($1)`,
    [id]
  )
}
const getIterations = async () => {
  const iterationTable = await db.query(`SELECT * FROM iteration`)
  return iterationTable.rows
}

const getProjectPis = async (id) => {
  const iterationPiTable = await db.query(
    `SELECT * FROM pi WHERE project_id=($1) AND isarchived=false`,
    [id]
  )
  return iterationPiTable.rows
}

module.exports = {
  createIteration,
  editIteration,
  archiveIteration,
  getIterations,
  getIterations,
  getProjectPis
}
