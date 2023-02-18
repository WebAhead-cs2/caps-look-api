const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const {
  createAbsence,
  editAbsence,
  deleteAbsence,
  getAbsences
} = require('../database/models/Absence')

const getAbseneceController = catchAsync(async (req, res) => {
  const data = await getAbsences()
  if (data) {
    res.status(200).send({
      successmsg: 'Absence retrieved successfully.',
      data: data
    })
  } else {
    res.status(500).send({
      msg: 'Unexpected error!!'
    })
  }
})

const editabsenceController = catchAsync(async (req, res) => {
  const data = await editAbsence()
  if (data) {
    res.status(200).send({
      successmsg: 'Absence details updated successfully',
      data: data
    })
  } else {
    res.status(500).send({
      msg: 'Unexpected error!!'
    })
    res.status(400).send({
      msg: 'Invalid input'
    })
  }
})

const addabsenceController = catchAsync(async (req, res) => {
  const data = await createAbsence()
  if (data) {
    const data = result.rows
    res.status(200).send({
      successmsg: 'Absence details addeD successfully',
      data: data
    })
  } else {
    res.status(500).send({
      msg: 'Unexpected error!!'
    })
    res.status(400).send({
      msg: 'Invalid input'
    })
  }
})

const deleteAbseneceController = catchAsync(async (req, res) => {
  const data = await deleteAbsence()
  if (data) {
    const data = result.rows
    res.status(200).send({
      successmsg: 'The absence has been deleted successfully',
      data: data
    })
  } else {
    res.status(500).send({
      msg: 'Unexpected error!!'
    })
  }
})

module.exports = {
  getAbseneceController,
  editabsenceController,
  addabsenceController,
  deleteAbseneceController
}
