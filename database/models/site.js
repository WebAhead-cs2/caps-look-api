const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createSite = (site_id, name, country) => {
  db.query(
    `INSERT INTO site (site_id,name, country) VALUES ($1, $2,$3) RETURNING *`,
    [site_id, name, country]
  );
};
export const editSite = (site_id, name, country) => {
  db.query(`UPDATE site SET name = ($2), country=($3) WHERE site_id = ($1)`, [
    site_id,
    name,
    country,
  ]);
};
export const deleteSite = (site_id) => {
  db.query(`DELETE FROM site WHERE site_id = ($1)`, [site_id]);
};
export const getSites = async () => {
  let siteTable = await db.query(`SELECT * FROM site`);
  return siteTable.rows;
};
