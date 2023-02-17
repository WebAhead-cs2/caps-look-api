const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const projectController = require('./controllers/projects.controller')
const loginController = require('./controllers/login.controller')
const authorizeMiddleware = require('./middleware/authorization')
const verifyToken = require('./middleware/verifyUser')
const auth = require('./controllers/auth.controller')
const homecontroller= require('./controllers/home.controller')

router.get('/home',home.controller)
//router.get('/home',homecontroller)
router.get('/', generalController.home)
router.put('/EditProject/:id', projectController.editProjectDetails)
router.post('/login', loginController)

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

router.get(
  '/GetPlannedSiteMix/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.getProjectSiteMixController
)

router.put(
  '/UpdatePlannedSiteMix',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.updateProjectSiteMixController
)

router.get(
  '/GetActualSiteMix/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.getActualSiteMixController
)

router.put('/Archive/:id', projectController.moveToArchive)

module.exports = router
