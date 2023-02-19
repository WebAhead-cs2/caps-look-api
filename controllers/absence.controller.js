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
    res.status(200).json({
      successmsg: 'Absence retrieved successfully.',
      data: data
    })
  } else {
    res.status(500).json({
      msg: 'Unexpected error!!'
    })
  }
})

const editabsenceController = catchAsync(async (req, res) => {
  const data = await editAbsence()
  if (data) {
    res.status(200).json({
      successmsg: 'Absence details updated successfully',
      data: data
    })
  } else if(data){
    res.status(400).json({
    msg: 'Invalid input'
    })
  } else {
    res.status(500).json({
      msg: 'Unexpected error!!'
    })
  }
})

const addabsenceController = catchAsync(async (req, res) => {
  const data = await createAbsence()
  if (data) {
    const data = result.rows
    res.status(200).json({
      successmsg: 'Absence details addeD successfully',
      data: data
    })
  } else if(data){
    res.status(400).json({
    msg: 'Invalid input'
    })
  } else {
    res.status(500).json({
      msg: 'Unexpected error!!'
    })
  }
})

const deleteAbseneceController = catchAsync(async (req, res) => {
  const data = await deleteAbsence()
  if (data) {
    const data = result.rows
    res.status(200).json({
      successmsg: 'The absence has been deleted successfully',
      data: data
    })
  } else {
    res.status(500).json({
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
