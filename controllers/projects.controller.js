const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const {
  getProjects,
  getProjectsDetails,
  editProject
} = require('../database/models/Project')

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
    parseInt(req.body.PiNumber),
    req.body.StartDate,
    req.params.id
  )
  console.log(data)
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

module.exports = {
  getProjectsController,
  showProjectsData,
  editProjectDetails
}
