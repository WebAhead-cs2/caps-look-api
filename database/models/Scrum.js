const db = require("./database/connections");

export const createScrum = async (
  scrum_name,
  scrum_master_id,
  application_id,
  project_id
) => {
  return await db.query(
    `INSERT INTO scrum (scrum_name,scrum_master_id, application_id,project_id) VALUES ($1,$2,$3,$4) RETURNING *`,
    [scrum_name, scrum_master_id, application_id, project_id]
  );
};
export const editScrum = async (
  id,
  scrum_name,
  scrum_master_id,
  application_id,
  project_id
) => {
  return await db.query(
    `UPDATE scrum SET scrum_name= ($2),scrum_master_id=($3),application_id=($4),project_id=($5) WHERE id = ($1)`,
    [id, scrum_name, scrum_master_id, application_id, project_id]
  );
};
export const deleteScrum = async (id) => {
  return await db.query(`DELETE FROM scrum WHERE id = ($1)`, [id]);
};
export const getScrums = async () => {
  const scrumTable = await db.query(`SELECT * FROM scrum`);
  return scrumTable.rows;
};
