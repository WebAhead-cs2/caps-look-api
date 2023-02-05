const db = require("../connection");

module.exports.createProject = async (
  project_name,
  start_date,
  project_iterations_count
) => {
  return await db.query(
    `INSERT INTO project (project_name,start_date,project_iterations_count) VALUES ($1,$2,$3) RETURNING *`,
    [project_name, start_date, project_iterations_count]
  );
};
module.exports.editProject = async (
  id,
  project_name,
  start_date,
  project_iterations_count
) => {
  return await db.query(
    `UPDATE project SET project_name= ($2), start_date=($3), project_iterations_count=($4) WHERE id = ($1)`,
    [id, project_name, start_date, project_iterations_count]
  );
};

module.exports.getProjects = async () => {
  const projectTable = await db.query(`SELECT * FROM project`);
  return projectTable.rows;
};
