const db = require('./database/connections')

export const createEmployee_absence = async (employee_id, absence) => {
  await db.query(
    `INSERT INTO employee_absence ( employee_id ,
        absence ) VALUES ($1,$2) RETURNING *`,
    [employee_id, absence]
  )
}
export const editEmployee_absence = async (id, employee_id, absence) => {
  await db.query(
    `UPDATE employee_absence SET  employee_id=($2),
    absence=($3)  WHERE id = ($1)`,
    [id, employee_id, absence]
  )
}
export const deleteEmployee_absence = async (id) => {
  await db.query(`DELETE FROM employee_absence WHERE id = ($1)`, [id])
}
export const getEmployee_absences = async () => {
  const employee_absenceTable = await db.query(`SELECT * FROM employee_absence`)
  return employee_absenceTable.rows
}
