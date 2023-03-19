const db = require('../connection')

const createMilestone = async (
  mileStoneName,
  StartDate,
  EndDate,
  project_id,
  description
) => {
  return await db.query(
    `INSERT INTO milestone (milestone_name,milestone_start_date,
      milestone_end_date,project_id,description) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [mileStoneName, StartDate, EndDate, project_id, description]
  )
}
const editMilestone = async (
  id,
  mileStoneName,
  StartDate,
  EndDate,
  project_id,
  description
) => {
  return await db.query(
    `UPDATE milestone SET milestone_name=($2),milestone_start_date=($3),milestone_end_date=($4),project_id=($5),description=($6) WHERE id = ($1)`,
    [id, mileStoneName, StartDate, EndDate, project_id, description]
  )
}
const archiveMilestone = async (id) => {
  return await db.query(
    `UPDATE milestone SET isarchived=true WHERE id = ($1)`,
    [id]
  )
}
const getMilestones = async () => {
  const milestoneTable = await db.query(`SELECT * FROM milestone`)
  return milestoneTable.rows
}
const getMilestonesProject = async (project_id) => {
  const milestoneTable = await db.query(
    `SELECT * FROM milestone WHERE project_id=($1) AND isarchived=false`,
    [project_id]
  )
  return milestoneTable.rows
}
module.exports = {
  createMilestone,
  editMilestone,
  archiveMilestone,
  getMilestones,
  getMilestonesProject
}
