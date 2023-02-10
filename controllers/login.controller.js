const db = require('../database/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
  const { email, password } = req.body
  try {
    const results = await db.query('SELECT * FROM employee WHERE email = $1', [
      email
    ])

    if (results.rows.length === 0) {
      return res.status(403).send({
        success: false,
        message: ' In correst email or password'
      })
    }

    const user = results.rows[0]

    const isCorrectpass = await bcrypt.compare(password, user.password)

    if (!isCorrectpass) {
      return res.status(403).send({
        success: false,
        message: 'Incorrect password or email'
      })
    }

    const token = jwt.sign(
      { id: user.id, access_tier: user.access_tier },
      process.env.TOKEN_SECRET
    )
    res.cookie('userToken', token)
    res.status(200).send({
      success: true,
      token
    })
  } catch (err) {
    console.log(err)
    res.status(500).send({ success: false })
  }
}
