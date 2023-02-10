const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const projectController = require('./controllers/projects.controller')

router.get('/', generalController.home)
router.get('/projects', projectController.getProjectsController)
router.get('/ProjectPage', projectController.showProjectsData)
router.put('/EditProject/:id', projectController.editProjectDetails)
router.post('/AddingProject', projectController.addingProject)
module.exports = router
