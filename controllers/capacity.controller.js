const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { getProjectPis } = require('../database/models/Iteration')
const { getIterationspi } = require('../database/models/Iteration')
const {
  getScrumCapacityPerIterationsQuery
} = require('../database/models/Capacity')
const {
  getItrationsDetails,
  getIterationByPiQuery,
  getEmployeeAvailablity,
  getEmployeeAbsences
} = require('../database/models/Capacity')

const logger = require('../logger')

const getItrations = catchAsync(async (req, res) => {
  const data = await getItrationsDetails(req.body.id)
  if (data) {
    let Itrations = data.map((item) => {
      let weeks = getDaysBetweenDates(
        item.iteration_start_date,
        item.iteration_end_date
      )
      return {
        iterationName: item.iteration_name,
        weeksNumber: weeks,
        StartDate: item.iteration_start_date
      }
    })
    res.status(200).json({
      message: 'all Itrations retrieved successfully.',
      data: Itrations
    })
  } else {
    res.status(200).json({
      message: 'no Itrations found',
      data: ''
    })
  }
})
function getDaysBetweenDates(date1, date2) {
  date1 = new Date(date1)
  date2 = new Date(date2)
  const timeDiff = date2.getTime() - date1.getTime()
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const weeks = Math.ceil(daysDiff / 7)
  return weeks
}

const getIterationsData = catchAsync(async (req, res) => {
  const data = await getIterationspi(req.body.id)
  if (data) {
    res.status(200).json({
      message: 'iteration retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no iteration found',
      data: ''
    })
  }
})

const getPis = catchAsync(async (req, res) => {
  const data = await getProjectPis(req.body.id)
  if (data) {
    res.status(200).json({
      message: 'iteration retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no iteration found',
      data: ''
    })
  }
})

const getScrumCapacityPerIterations = catchAsync(async (req, res) => {
  const data = await getScrumCapacityPerIterationsQuery(
    req.body.project_id,
    req.body.scrum_id
  )
  if (data) {
    res.status(200).json({
      message: 'iteration retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no iteration found',
      data: ''
    })
  }
})

const getIterationByPi = catchAsync(async (req, res) => {
  const data = await getIterationByPiQuery(
    req.body.scrum_ids,
    req.body.pi_from,
    req.body.pi_to
  )
  if (data) {
    res.status(200).json({
      message: 'iteration retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no iteration found',
      data: ''
    })
  }
})

const getEmployeeAvailablityController = catchAsync(async (req, res) => {
  const data = await getEmployeeAvailablity(req.body.scrumId)
  if (data) {
    res.status(200).json({
      message: 'all Absences retrieved successfully.',
      data: data.rows
    })
  } else {
    res.status(200).json({
      message: 'no Absences found',
      data: ''
    })
  }
})

const getEmployeeAbsencesController = catchAsync(async (req, res) => {
  const data = await getEmployeeAbsences(req.body.id)
  if (data) {
    res.status(200).json({
      message: 'all Absences retrieved successfully.',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Absences found',
      data: ''
    })
  }
})

module.exports = {
  getItrations,
  getIterationsData,
  getPis,
  getScrumCapacityPerIterations,
  getIterationByPi,
  getEmployeeAvailablityController,
  getEmployeeAbsencesController
}
