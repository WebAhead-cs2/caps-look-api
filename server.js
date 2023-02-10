// init an express app
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router')
const { errorConverter, errorHandler } = require('./middleware/error')

const app = express()
const expressWinston = require('express-winston')
const { transports, format } = require('winston')
const logger = require('./logger')

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
  })
)

const errmessage = format.printf(({ level, meta, timestamp }) => {
  return ` ${timestamp} ${level}: ${meta.message}`
})

app.use(
  expressWinston.errorLogger({
    transports: [new transports.Console({ level: 'error' })],
    format: format.combine(format.json(), format.timestamp(), errmessage)
  })
)

// cors is a middleware that allows us to specify which domains are allowed to access our API
app.use(
  cors({
    origin: ['http://localhost:3000']
  })
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.use(errorConverter)
app.use(errorHandler)

app.listen(process.env.PORT || 4000, function () {
  console.log('Listening on port http://localhost:4000 !')
})
