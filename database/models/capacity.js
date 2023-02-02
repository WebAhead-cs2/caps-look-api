const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createCapacity = (
  productivity,
  availability,
  employee_id,
  total_capacity
) => {
  db.query(
    `INSERT INTO capacity (productivity,
        availability,
        employee_id,
        total_capacity) VALUES ($1,$2,$3,$4) RETURNING *`,
    [productivity, availability, employee_id, total_capacity]
  );
};
export const editCapacity = (
  id,
  productivity,
  availability,
  employee_id,
  total_capacity
) => {
  db.query(
    `UPDATE capacity SET productivity=($2),
    availability=($3),
    employee_id=($4),
    total_capacity=($5) WHERE id = ($1)`,
    [id, productivity, availability, employee_id, total_capacity]
  );
};
export const deleteCapacity = (id) => {
  db.query(`DELETE FROM capacity WHERE id = ($1)`, [id]);
};
export const getCapacitys = async () => {
  let capacityTable = await db.query(`SELECT * FROM capacity`);
  return capacityTable.rows;
};
