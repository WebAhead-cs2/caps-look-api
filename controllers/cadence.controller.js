const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const logger = require('../logger')
const {
  getPisProject,
  getIterationspi,
  createPi,
  addPi,
  deletePi,
  createIteration,
  deleteIteration
} = require('../database/models/Cadence')

const getPisProjectDetails = catchAsync(async (req, res) => {
  const data = await getPisProject(req.body.id)
  if (data) {
    res.status(200).json({
      message: 'Pis project retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Pis project found',
      data: ''
    })
  }
})
const getiterationsPiController = catchAsync(async (req, res) => {
  const data = await getIterationspi(req.body.project_id, req.body.pi_id)
  if (data) {
    res.status(200).json({
      message: 'Iterationspi retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Iterationspi found',
      data: ''
    })
  }
})

const createPiDetails = catchAsync(async (req, res) => {
  const data = await createPi(req.body.project_id, req.body.pis)

  if (data) {
    res.status(200).json({
      message: 'the Pi created successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to creat Pi',
      data: ''
    })
  }
})

const addPiData = catchAsync(async (req, res) => {
  const data = await addPi(
    req.body.project_id,
    req.body.pis_input,
    req.body.pis
  )

  if (data) {
    res.status(200).json({
      message: 'the Pi created successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to add Pi',
      data: ''
    })
  }
})
const deletePisController = catchAsync(async (req, res) => {
  const data = await deletePi(
    req.body.pis_input,
    req.body.pis,
    req.body.project_id
  )
  if (data) {
    res.status(200).json({
      message: 'Pis deleted successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Pis found',
      data: ''
    })
  }
})

const createIterationByPi = catchAsync(async (req, res) => {
  const data = await createIteration(
    req.body.pis,
    req.body.project_id,
    req.body.iteration_number,
    new Date(req.body.startDate),
    new Date(req.body.endDate)
  )
  if (data) {
    res.status(200).json({
      message: 'iteration added successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no iteration',
      data: ''
    })
  }
})

const deleteIterationByPi = catchAsync(async (req, res) => {
  const data = await deleteIteration(
    req.body.iterations,
    req.body.project_id,
    req.body.pi_id,
    req.body.iteration_input
  )
  if (data) {
    res.status(200).json({
      message: 'iteration added successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no iteration',
      data: ''
    })
  }
})

module.exports = {
  getPisProjectDetails,
  getiterationsPiController,
  createPiDetails,
  addPiData,
  deletePisController,
  createIterationByPi,
  deleteIterationByPi
}
