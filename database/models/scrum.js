const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createScrum = (name, scrum_master, application_id, project_id) => {
  db.query(
    `INSERT INTO scrum (name,scrum_master, application_id,project_id) VALUES ($1,$2,$3,$4) RETURNING *`,
    [name, scrum_master, application_id, project_id]
  );
};
export const editScrum = (
  id,
  name,
  scrum_master,
  application_id,
  project_id
) => {
  db.query(
    `UPDATE scrum SET name= ($2),scrum_master=($3),application_id=($4),project_id=($5) WHERE id = ($1)`,
    [id, name, scrum_master, application_id, project_id]
  );
};
export const deleteScrum = (id) => {
  db.query(`DELETE FROM scrum WHERE id = ($1)`, [id]);
};
export const getScrums = async () => {
  let scrumTable = await db.query(`SELECT * FROM scrum`);
  return scrumTable.rows;
};
