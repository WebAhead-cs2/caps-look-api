const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const projectController = require('./controllers/projects.controller')
const absenceController = require('./controllers/absences.controller')
const siteController = require('./controllers/sites.controller')
const loginController = require('./controllers/login.controller')
const scrumsController = require('./controllers/scrums.controller')
const applicationController = require('./controllers/application.controller')
const capacityController = require('./controllers/capacity.controller')
const cadenceController = require('./controllers/cadence.controller')
const authorizeMiddleware = require('./middleware/authorization')
const verifyToken = require('./middleware/verifyUser')
const auth = require('./controllers/auth.controller')
const employeeController = require('./controllers/employee.controller')
const jobController = require('./controllers/job.controller')
const homecontroller = require('./controllers/home.controller')
const iterationController = require('./controllers/iteration.controller')
const piController = require('./controllers/pi.controller')
const milestoneController = require('./controllers/milestone.controller')

router.get('/', generalController.home)
router.put('/EditProject/:id', projectController.editProjectDetails)
router.post('/login', loginController)
router.get('/Employee', employeeController.getEmployeesData)
router.post('/addingEmployee', employeeController.addingEmployeeData)
router.put('/ArchiveEmployee/:id', employeeController.archiveEmployee)
router.get('/Sites', siteController.getSitesName)
router.get('/Jobs', jobController.getAllJobs)
router.put('/editEmployeeDetails/:id', employeeController.editEmployeeDetails)
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

router.get(
  '/sitesDetails',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  siteController.getSitesController
)

router.put(
  '/editsite/:id',
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

router.put(
  '/archiveSite/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  siteController.archiveSitesController
)

router.put(
  '/Archive/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  projectController.moveToArchive
)

router.get(
  '/absences',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  absenceController.getAbsencesController
)

router.post(
  '/addingAbsence',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  absenceController.addingAbsence
)

router.post(
  '/importAbsence',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  absenceController.importingAbsence
)

router.get(
  '/getAbsenceSites',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  absenceController.reqAbsenceSites
)

router.put(
  '/archiveAbsence/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  absenceController.archiveAbsence
)

router.put(
  '/EditAbsence/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  absenceController.editAbsenceDetails
)

router.post(
  '/GetScrums',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  scrumsController.getScrumsDetails
)
router.post(
  '/AddScrum',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  scrumsController.addScrum
)
router.put('/EditScrum/:id', scrumsController.editScrumDetails)

router.put('/ArchiveScrum/:id', scrumsController.ArchiveScrum)

router.get(
  '/GetScrumMaster',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  scrumsController.getScrumMasterController
)

router.post(
  '/GetApplicationName',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  applicationController.getApplicationController
)

router.post('/importEmployees', employeeController.importingEmployees)

router.get(
  '/pis',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  piController.getPisController
)
router.post(
  '/pisProject',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.getPisProjectDetails
)
router.put(
  '/editPi/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  piController.editPiDetails
)
router.post(
  '/createPi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.createPiDetails
)

router.put(
  '/archivePi/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  piController.archivePisController
)
router.get(
  '/iterations',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  iterationController.getIterationsController
)
router.post(
  '/iterationsPi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.getiterationsPiController
)
router.post(
  '/createIteationByPi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.createIterationByPi
)
router.post(
  '/createIteationByPi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.createIterationByPi
)
router.post(
  '/addPi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.addPiData
)
router.post(
  '/deletePi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.deletePisController
)
router.post(
  '/deleteIterationByPI',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  cadenceController.deleteIterationByPi
)
router.put(
  '/editIteration/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  iterationController.editIterationDetails
)

router.post(
  '/createIteration',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  iterationController.creatIterationDetails
)

router.put(
  '/archiveIteration/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  iterationController.archiveIterationsController
)
router.get(
  '/milestones',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  milestoneController.getMilestonesController
)
router.post(
  '/milestoneProject',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  milestoneController.getMilestonesProjectDetails
)
router.put(
  '/editMilestone/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  milestoneController.editMilestoneDetails
)
router.post(
  '/createMilestone',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  milestoneController.createMilestoneDetails
)

router.put(
  '/archiveMilestone/:id',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  milestoneController.archiveMilestonesController
)

router.post(
  '/GetpiDate',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  capacityController.getIterationsData
)

router.post(
  '/Getpis',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  capacityController.getPis
)

router.post(
  '/GetItration',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  capacityController.getItrations
)

router.post(
  '/getScrumCapacityPerIterations',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  capacityController.getScrumCapacityPerIterations
)

router.post(
  '/getIterationByPi',
  verifyToken,
  authorizeMiddleware(['scrum_master', 'project_manager', 'resource_manager']),
  capacityController.getIterationByPi
)

router.post(
  '/getScrumAvailablity',
  capacityController.getEmployeeAvailablityController
)

router.post(
  '/getEmployeeAbsence',
  capacityController.getEmployeeAbsencesController
)

module.exports = router
