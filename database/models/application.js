const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createApplication = (application_name, project_id) => {
  db.query(
    `INSERT INTO application (application_name,project_id) VALUES ($1,$2) RETURNING *`,
    [application_name, project_id]
  );
};
export const editApplication = (id, application_name, project_id) => {
  db.query(
    `UPDATE application SET application_name= ($2),project_id=($3) WHERE id = ($1)`,
    [id, application_name, project_id]
  );
};
export const deleteApplication = (id) => {
  db.query(`DELETE FROM application WHERE id = ($1)`, [id]);
};
export const getApplications = async () => {
  let applicationTable = await db.query(`SELECT * FROM application`);
  return applicationTable.rows;
};
