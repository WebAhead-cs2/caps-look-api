const router = require('express').Router()
const generalController = require('./controllers/general.controller')

router.get('/', generalController.home)

module.exports = router
