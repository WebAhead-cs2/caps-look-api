const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const absenceController = require('./controllers/absence.controller')
const employeeController = require('./controllers/employee.controller')
const projectsController = require('./controllers/project.controller')

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

// project json
router.get('/projects', projectsController.getProjectsController)
router.put('/edit-project', projectsController.editproject)
router.post('/add-project', projectsController.addproject)
router.delete('/delete-project', projectsController.deleteproject)

router.get('/ProjectPage', projectscontroller.showProjectsData)

module.exports = router
