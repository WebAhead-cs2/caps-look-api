const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const projectController = require('./controllers/projects.controller')
const authorizeMiddleware = require('./middleware/authorization')
const verifyToken = require('./middleware/verifyUser')
const auth = require('./controllers/auth.controller')

router.get('/', generalController.home)
router.put('/EditProject/:id', projectController.editProjectDetails)

router.get(
  '/projects',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.getProjectsController
)
router.get(
  '/ProjectPage',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.showProjectsData
)
router.post(
  '/AddingProject',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.addingProject
)
router.get('/Logout', auth.logout)

module.exports = router
