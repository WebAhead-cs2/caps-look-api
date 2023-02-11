const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { createProject } = require('../database/models/Project')
const {
  getProjects,
  getProjectsDetails,
  editProject
} = require('../database/models/Project')
const logger = require('../logger')

const getProjectsController = catchAsync(async (req, res) => {
  const data = await getProjects()
  if (data) {
    res.status(200).json({
      message: 'all projects retrieved successfully.',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no projects found',
      data: ''
    })
  }
})

const showProjectsData = catchAsync(async (req, res) => {
  const data = await getProjectsDetails()
  if (data) {
    res.status(200).json({
      message: 'projects retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no projects found',
      data: ''
    })
  }
})

const editProjectDetails = catchAsync(async (req, res) => {
  const data = await editProject(
    req.body.ProjectName,
    req.body.PiNumber,
    req.body.StartDate,
    req.params.id
  )
  logger.info(
    `the data ${req.body.ProjectName},${req.body.PiNumber},${req.body.StartDate} edited successfully`
  )

  if (data) {
    res.status(200).json({
      message: 'the project edited successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to edit project',
      data: ''
    })
  }
})

const addingProject = catchAsync(async (req, res) => {
  const addedData = await createProject(
    req.body.ProjectName,
    req.body.StartDate,
    req.body.PiNumber
  )
  logger.info(
    `the data ${req.body.ProjectName},${req.body.StartDate},${req.body.PiNumber} inserted successfully`
  )
  if (
    req.body.ProjectName !== '' &&
    req.body.StartDate !== null &&
    req.body.PiNumber !== null
  ) {
    res.status(200).json({
      message: 'create project is done successfully',
      data: addedData
    })
  } else if (req.body.ProjectName == '') {
    res.status(200).json({
      message: 'Please Inseat a name for the project'
    })
  } else if (req.body.PiNumber == null) {
    res.status(200).json({
      message: 'Please Inseat number of iterations'
    })
  } else if (req.body.StartDate == null) {
    res.status(200).json({
      message: 'Please Inseat starting date for the project'
    })
  } else if (
    req.body.ProjectName == '' &&
    req.body.StartDate == null &&
    req.body.PiNumber == null
  ) {
    res.status(200).json({
      message: 'Please Inseat data'
    })
  } else {
    res.status(200).json({
      message: 'Adding project is failed'
    })
  }
})
module.exports = {
  getProjectsController,
  addingProject,
  showProjectsData,
  editProjectDetails
}
