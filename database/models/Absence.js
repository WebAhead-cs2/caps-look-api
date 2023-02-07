const db = require('../connection')
const createAbsence = async (
  absence_name,
  site_id,
  optional,
  absence_start_date,
  absence_end_date
) => {
  return await db.query(
    `INSERT INTO absence (absence_name, site_id,
    optional,
    absence_start_date,
    absence_end_date) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [absence_name, site_id, optional, absence_start_date, absence_end_date]
  )
}
const editAbsence = async (
  id,
  absence_name,
  site_id,
  optional,
  absence_start_date,
  absence_end_date
) => {
  return await db.query(
    `UPDATE absence SET absence_name= ($2), site_id=($3),
  optional=($4),
  absence_start_date=($5),
  absence_end_date=($6) WHERE id = ($1)`,
    [id, absence_name, site_id, optional, absence_start_date, absence_end_date]
  )
}
const deleteAbsence = async (id) => {
  return await db.query(`DELETE FROM absence WHERE id = ($1)`, [id])
}
const getAbsences = async () => {
  const absenceTable = await db.query(`SELECT * FROM absence`)
  return absenceTable.rows
}
module.exports = { createAbsence, editAbsence, deleteAbsence, getAbsences }
