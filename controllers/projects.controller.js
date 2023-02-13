const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { createProject } = require('../database/models/Project')
const {
  getProjects,
  getProjectsDetails,
  editProject,
  getProjectSiteMix,
  updateProjectSiteMix,
  getActualSiteMix,
  archivedProject
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
    `the data ${req.body.ProjectName},${req.body.PiNumber},${req.body.StartDate},${req.body.plannedMix}  edited successfully`
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
    req.body.PiNumber,
    req.body.plannedMix
  )
  logger.info(
    `the data ${req.body.ProjectName},${req.body.StartDate},${req.body.PiNumber},${req.body.plannedMix} inserted successfully`
  )
  if (addedData) {
    res.status(200).json({
      message: 'create project is done successfully',
      data: addedData
    })
  } else {
    res.status(200).json({
      message: 'Adding project is failed'
    })
  }
})

const getProjectSiteMixController = catchAsync(async (req, res) => {
  const projectId = req.params.id
  const data = await getProjectSiteMix(projectId)

  if (data) {
    res.status(200).json({
      message: 'site mix retrieved successfully.',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'project id not found',
      data: ''
    })
  }
})

const updateProjectSiteMixController = catchAsync(async (req, res) => {
  const { projectId, planMix } = req.body
  const data = await updateProjectSiteMix({ projectId, planMix })
  if (data) {
    res.status(200).json({
      message: 'site mix updated succesfully.',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'site mix update failed',
      data: ''
    })
  }
})

const getActualSiteMixController = catchAsync(async (req, res) => {
  const projectId = req.params.id
  const data = await getActualSiteMix(projectId)

  if (data) {
    res.status(200).json({
      message: 'actual site mix retrieved successfully.',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'project id not found',
      data: ''
    })
  }
})
const moveToArchive = async (req, res) => {
  const data = await archivedProject(parseInt(req.params.id));
  if (data) {
    res.status(200).json({
      message: 'the project moved to archived successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to move to archived',
      data: ''
    })
  }
}
module.exports = {
  getProjectsController,
  addingProject,
  showProjectsData,
  editProjectDetails,
  getProjectSiteMixController,
  updateProjectSiteMixController,
  getActualSiteMixController,
  moveToArchive
}
