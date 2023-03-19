//// Pi controller///

const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const logger = require('../logger')
const {
  createPi,
  editPi,
  archivePi,
  getPis,
  getPisProject
} = require('../database/models/Pi')

const createPiDetails = catchAsync(async (req, res) => {
  const data = await createPi(req.body.pi_name, req.body.project_id)
  logger.info(
    `the Pi name ${req.body.pi_name},${req.body.project_id},  created successfully`
  )

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

const editPiDetails = catchAsync(async (req, res) => {
  const data = await editPi(
    req.params.id,
    req.body.pi_name,
    req.body.project_id
  )
  logger.info(
    `the data ${req.body.pi_name},${req.body.project_id},${req.body.id},  edited successfully`
  )

  if (data) {
    res.status(200).json({
      message: 'the Pi edited successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to edit Pi',
      data: ''
    })
  }
})

const archivePisController = catchAsync(async (req, res) => {
  const data = await archivePi(req.params.id)
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

const getPisController = catchAsync(async (req, res) => {
  const data = await getPis()
  if (data) {
    res.status(200).json({
      message: 'Pis retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Pis found',
      data: ''
    })
  }
})

module.exports = {
  getPisController,
  editPiDetails,
  archivePisController,
  createPiDetails
}
