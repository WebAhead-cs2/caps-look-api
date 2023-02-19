const db = require('../connection')

const createSite = async (site_name, country_name) => {
  return await db.query(
    `INSERT INTO site (site_name, country_name) VALUES ($1, $2) RETURNING *`,
    [site_name, country_name]
  )
}
const editSite = async (id, site_name, country_name) => {
  return await db.query(
    `UPDATE site SET site_name = ($2), country_name=($3) WHERE id = ($1)`,
    [id, site_name, country_name]
  )
}
const deleteSite = async (id) => {
  return await db.query(`DELETE FROM site WHERE id = ($1)`, [id])
}
const getSites = async () => {
  const siteTable =
    await db.query(`SELECT site.id, site.site_name,site.country_name, (SELECT COUNT(*) FROM employee where employee.site_id=site.id) as employee_number FROM
  site ;`)
  return siteTable.rows
}
module.exports = { createSite, editSite, deleteSite, getSites }
