const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createMilestone = (name, date, project_id, description) => {
  db.query(
    `INSERT INTO milestone (name,date,project_id,description) VALUES ($1,$2,$3,$4) RETURNING *`,
    [name, date, project_id, description]
  );
};
export const editMilestone = (id, name, date, project_id, description) => {
  db.query(
    `UPDATE milestone SET name= ($2),date=($3),project_id=($4),description=($5) WHERE id = ($1)`,
    [id, name, date, project_id, description]
  );
};
export const deleteMilestone = (id) => {
  db.query(`DELETE FROM milestone WHERE id = ($1)`, [id]);
};
export const getMilestones = async () => {
  let milestoneTable = await db.query(`SELECT * FROM milestone`);
  return milestoneTable.rows;
};
