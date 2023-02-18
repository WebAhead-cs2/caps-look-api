const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const projectController = require('./controllers/projects.controller')
const loginController = require('./controllers/login.controller')
const authorizeMiddleware = require('./middleware/authorization')
const verifyToken = require('./middleware/verifyUser')
const auth = require('./controllers/auth.controller')
const homecontroller = require('./controllers/home.controller')

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

router.get(
  '/home/projectStartDay/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  homecontroller.getStartDayController
)
router.get(
  '/home/projectCountEmployees/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  homecontroller.getCountEmployeesControllers
)

router.get(
  '/home/projectCountIterations/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  homecontroller.getCountIterationsController
)
router.get(
  '/home/projectCountScrums/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  homecontroller.getCountScrumsController
)
router.get(
  '/home/projectCountSites/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  homecontroller.getCountSitesController
)

router.put('/Archive/:id', projectController.moveToArchive)

router.get('*', (req, res) => res.send('not found'))
module.exports = router
