const pg = require('pg')

require('dotenv').config()

const connectionString = process.env.DATABASE_URL
console.log('Connection String:' + connectionString)
const isDev = (process.env.NODE_ENV || 'development') === 'development'

const db = new pg.Pool({
  connectionString,
  ...(!isDev && { ssl: { rejectUnauthorized: false } })
})

module.exports = db
