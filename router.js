const router = require('express').Router()
const generalController = require('./controllers/general.controller')

const absenceController = require('./controllers/absence.controller')
const employeeController = require('./controllers/employee.controller')


router.get('/', generalController.home)

//absence json
router.get('/getAbsenece', absenceController.getAbseneceController)
router.put('/edit-absence', absenceController.editabsenceController)
router.post('/add-absence', absenceController.addabsenceController)
router.delete('/delete-absence', absenceController.deleteAbseneceController)

//employee json
router.get('/getEmployees', employeeController.getEmployeesController)
router.put('/edit-employee', employeeController.editemployeeController)
router.post('/add-employee', employeeController.addemployeeCntroller)
router.delete('/delete-employee', employeeController.deleteemployeeController)


// router.get('/ProjectPage', projectscontroller.showProjectsData)

const projectController = require('./controllers/projects.controller')
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

router.put('/Archive/:id', projectController.moveToArchive)

module.exports = router
