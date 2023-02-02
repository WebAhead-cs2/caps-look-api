const db = require("./database/connections");
const cors = require("cors");
app.use(cors());
export const createAbsence = (
  name,
  site_id,
  mandatory_optional,
  start_date,
  end_date
) => {
  db.query(
    `INSERT INTO absence (name, site_id,
    mandatory_optional,
    start_date,
    end_date) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [name, site_id, mandatory_optional, start_date, end_date]
  );
};
export const editAbsence = (
  id,
  name,
  site_id,
  mandatory_optional,
  start_date,
  end_date
) => {
  db.query(
    `UPDATE absence SET name= ($2), site_id=($3),
  mandatory_optional=($4),
  start_date=($5),
  end_date=($6) WHERE id = ($1)`,
    [id, name, site_id, mandatory_optional, start_date, end_date]
  );
};
export const deleteAbsence = (id) => {
  db.query(`DELETE FROM absence WHERE id = ($1)`, [id]);
};
export const getAbsences = async () => {
  let absenceTable = await db.query(`SELECT * FROM absence`);
  return absenceTable.rows;
};
