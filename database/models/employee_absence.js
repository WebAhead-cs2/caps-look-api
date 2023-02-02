const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createEmployee_absence = (employee_id, absence) => {
  db.query(
    `INSERT INTO employee_absence ( employee_id ,
        absence ) VALUES ($1,$2) RETURNING *`,
    [employee_id, absence]
  );
};
export const editEmployee_absence = (id, employee_id, absence) => {
  db.query(
    `UPDATE employee_absence SET  employee_id=($2),
    absence=($3)  WHERE id = ($1)`,
    [id, employee_id, absence]
  );
};
export const deleteEmployee_absence = (id) => {
  db.query(`DELETE FROM employee_absence WHERE id = ($1)`, [id]);
};
export const getEmployee_absences = async () => {
  let employee_absenceTable = await db.query(`SELECT * FROM employee_absence`);
  return employee_absenceTable.rows;
};
