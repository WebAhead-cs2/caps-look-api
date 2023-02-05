const db = require('./database/connections')

export const createSite = async (site_name, country_name) => {
  return await db.query(
    `INSERT INTO site (site_name, country_name) VALUES ($1, $2) RETURNING *`,
    [site_name, country_name]
  )
}
export const editSite = async (id, site_name, country_name) => {
  return await db.query(
    `UPDATE site SET site_name = ($2), country_name=($3) WHERE id = ($1)`,
    [id, site_name, country_name]
  )
}
export const deleteSite = async (id) => {
  return await db.query(`DELETE FROM site WHERE id = ($1)`, [id])
}
export const getSites = async () => {
  const siteTable = await db.query(`SELECT * FROM site`)
  return siteTable.rows
}
