const router = require('express').Router()
const generalController = require('./controllers/general.controller')
const absenceController = require('./controllers/absence.controller')
const employeeController = require('./controllers/employee.controller')
const projectsController = require('./controllers/project.controller')

router.get('/', generalController.home)

//absence json
router.get('/getAbsenece', absencecontroller.getAbsenece)
router.put('/edit-absence', absencecontroller.editabsence)
router.post('/add-absence', absencecontroller.addabsence)
router.delete('/delete-absence', absencecontroller.deleteAbsenece)

//employee json
router.get('/getEmployees', employeecontroller.getEmployees)
router.put('/edit-employee', employeecontroller.editemployee)
router.post('/add-employee', employeecontroller.addemployee)
router.delete('/delete-employee', employeecontroller.deleteemployee)

// project json
router.get('/projects', projectscontroller.getProjectsController)
router.put('/edit-project', projectscontroller.editproject)
router.post('/add-project', projectscontroller.addproject)
router.delete('/delete-project', projectscontroller.deleteproject)

router.get('/ProjectPage', projectscontroller.showProjectsData)

module.exports = router
