const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createProject = (name, start_date, pi_count) => {
  db.query(
    `INSERT INTO project (name,start_date,pi_count) VALUES ($1,$2,$3) RETURNING *`,
    [name, start_date, pi_count]
  );
};
export const editProject = (id, name, start_date, pi_count) => {
  db.query(
    `UPDATE project SET name= ($2), start_date=($3), pi_count=($4) WHERE id = ($1)`,
    [id, name, start_date, pi_count]
  );
};
export const deleteProject = (id) => {
  db.query(`DELETE FROM project WHERE id = ($1)`, [id]);
};
export const getProjects = async () => {
  let projectTable = await db.query(`SELECT * FROM project`);
  return projectTable.rows;
};
