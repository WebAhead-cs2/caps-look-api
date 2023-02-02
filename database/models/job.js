const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createJob = (job_id, name) => {
  db.query(`INSERT INTO job (job_id,name) VALUES ($1,$2) RETURNING *`, [
    job_id,
    name,
  ]);
};
export const editJob = (job_id, name) => {
  db.query(`UPDATE job SET name= ($2) WHERE job_id = ($1)`, [job_id, name]);
};
export const deleteJob = (job_id) => {
  db.query(`DELETE FROM job WHERE job_id = ($1)`, [job_id]);
};
export const getJobs = async () => {
  let jobTable = await db.query(`SELECT * FROM job`);
  return jobTable.rows;
};
