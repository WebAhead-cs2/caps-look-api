// init an express app
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const router = require('./router')
const { errorConverter, errorHandler } = require('./middleware/error')
const helmet = require('helmet')

const app = express()
app.use(helmet())
const expressWinston = require('express-winston')
const { transports, format } = require('winston')
const logger = require('./logger')

// app.use(
//   expressWinston.logger({
//     winstonInstance: logger,
//     statusLevels: true
//   })
// )
// cors is a middleware that allows us to specify which domains are allowed to access our API

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000']
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

app.use(cookieParser())

// cors is a middleware that allows us to specify which domains are allowed to access our API
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000']
  })
)
app.use(express.json({ limit: '10MB' }))
app.use(express.urlencoded({ limit: '10MB', extended: false }))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // Limit each IP to 1000 requests per windowMs
})
app.use(limiter)

app.get('/', limiter, (req, res) => res.send('Hello World!'))

app.use('/', router)

app.use(errorConverter)
app.use(errorHandler)

app.listen(process.env.PORT || 4000, function () {
  console.log('Listening on port http://localhost:4000 !')
})
