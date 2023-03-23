const db = require('../connection')

const productivityEmployee = async () => {
  const productivityEmployeeTable = await db.query(
    `SELECT employee_id,productivity FROM capacity`
  )
  return productivityEmployeeTable.rows
}
module.exports = { productivityEmployee }
