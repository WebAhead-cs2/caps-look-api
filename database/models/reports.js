const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const ProductivityEmployee = async () => {
  // let ProductivityEmployeeTable = await db.query(`SELECT employee.idnumber,capacity.productivity FROM employee INNER JOIN capacity ON employee.id=capacity.employee_id`);
  let ProductivityEmployeeTable = await db.query(
    `SELECT employee_id,productivity FROM capacity`
  );
  return ProductivityEmployeeTable.rows;
};
