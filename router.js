const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const projectController = require('./controllers/projects.controller')
const absenceController = require('./controllers/absences.controller')
const siteController = require('./controllers/sites.controller')
const loginController = require('./controllers/login.controller')
const authorizeMiddleware = require('./middleware/authorization')
const verifyToken = require('./middleware/verifyUser')
const auth = require('./controllers/auth.controller')

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
  '/sites',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  siteController.getSitesController
)

router.put(
  '/editsite',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  siteController.editSiteDetails
)

router.post(
  '/createsite',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  siteController.creatSiteDetails
)

router.post(
  '/deletesite',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  siteController.deleteSitesController
)

router.put('/Archive/:id', projectController.moveToArchive)

router.get('/absences', absenceController.getAbsencesController)

router.post('/addingAbsence', absenceController.addingAbsence)

router.get('/getAbsenceSites', absenceController.reqAbsenceSites)

router.put('/archiveAbsence/:id', absenceController.archiveAbsence)
router.put('/EditAbsence/:id', absenceController.editAbsenceDetails)

module.exports = router
