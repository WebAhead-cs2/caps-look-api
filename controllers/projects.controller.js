const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const {
  getProjects,
  getProjectsDetails
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

module.exports = {
  getProjectsController,
  showProjectsData
}
