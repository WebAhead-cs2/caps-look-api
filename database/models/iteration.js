const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createIteration = (
  name,
  project_id,
  index,
  start_date,
  end_date
) => {
  db.query(
    `INSERT INTO iteration (name,project_id, index,
      start_date,
      end_date) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [name, project_id, index, start_date, end_date]
  );
};
export const editIteration = (
  id,
  name,
  project_id,
  index,
  start_date,
  end_date
) => {
  db.query(
    `UPDATE iteration SET name= ($2),project_id=($3) ,index=($4),
  start_date=($5),
  end_date=($6) WHERE id = ($1)`,
    [id, name, project_id, index, start_date, end_date]
  );
};
export const deleteIteration = (id) => {
  db.query(`DELETE FROM iteration WHERE id = ($1)`, [id]);
};
export const getIterations = async () => {
  let iterationTable = await db.query(`SELECT * FROM iteration`);
  return iterationTable.rows;
};
