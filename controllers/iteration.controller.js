//// Iteration controller///

const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const logger = require('../logger')
const {
  createIteration,
  editIteration,
  archiveIteration,
  getIterations,
  getIterationspi
} = require('../database/models/Iteration')

const creatIterationDetails = catchAsync(async (req, res) => {
  const data = await createIteration(
    req.body.iteration_name,
    req.body.project_id,
    req.body.pi_id,
    req.body.iteration_number,
    req.body.iteration_start_date,
    req.body.iteration_end_date
  )
  logger.info(
    `the Iteration name ${req.body.iteration_name},${req.body.iteration_number},  created successfully`
  )

  if (data) {
    res.status(200).json({
      message: 'the Iteration created successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to creat Iteration',
      data: ''
    })
  }
})

const editIterationDetails = catchAsync(async (req, res) => {
  const data = await editIteration(
    req.params.id,
    req.body.iteration_name,
    req.body.project_id,
    req.body.pi_id,
    req.body.iteration_number,
    req.body.iteration_start_date,
    req.body.iteration_end_date
  )
  logger.info(
    `the data ${req.body.iteration_name},${req.body.iteration_number},${req.body.id},  edited successfully`
  )

  if (data) {
    res.status(200).json({
      message: 'the Iteration edited successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to edit Iteration',
      data: ''
    })
  }
})

const archiveIterationsController = catchAsync(async (req, res) => {
  const data = await archiveIteration(req.params.id)
  if (data) {
    res.status(200).json({
      message: 'Iterations deleted successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Iterations found',
      data: ''
    })
  }
})

const getIterationsController = catchAsync(async (req, res) => {
  const data = await getIterations()
  if (data) {
    res.status(200).json({
      message: 'Iterations retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Iterations found',
      data: ''
    })
  }
})

module.exports = {
  getIterationsController,
  editIterationDetails,
  archiveIterationsController,
  creatIterationDetails
}
