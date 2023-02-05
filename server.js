// init an express app
const express = require("express")
const cors = require("cors")

const router = require("./router")
const { errorConverter, errorHandler } = require("./middleware/error")

const app = express()

// cors is a middleware that allows us to specify which domains are allowed to access our API
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", router)

app.use(errorConverter)
app.use(errorHandler)

app.listen(process.env.PORT || 4000, function () {
  console.log("Listening on port http://localhost:4000!")
})
