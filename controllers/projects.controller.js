const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { getProjects } = require('../database/models/Project')
const { createProject } = require('../database/models/Project')
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

const AddingProject = catchAsync(async (req, res) => {
    const addedData = await createProject( req.body.ProjectName, req.body.StartDate, req.body.PiNumber )
    if (addedData) {
      res.status(200).json({
        message: 'create project is done successfully',
        data: addedData
      })
    } else {
      res.status(200).json({
        message: 'Adding project is failed',
        data: ''
      })
    }
  

})


module.exports = {
  getProjectsController,
  AddingProject
}
