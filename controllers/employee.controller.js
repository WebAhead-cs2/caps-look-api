const catchAsync = require('../utils/catchAsync')
const db = require('../database/connection')

const getEmployees = catchAsync((req, res) => {
  db.query('SELECT * FROM employee ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'all Employees retrieved successfully.',
        data: result.rows
      })
      if (data.length === 0) {
        msg: 'No Employees provided!'
      }
    })
    .catch(() => {
      res.status(500).send({
        msg: 'Unexpected error!!'
      })
    })
})

const editemployee = catchAsync((req, res) => {
  db.query('SELECT * FROM employee ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'Employee details updated successfully',
        data: result.rows
      })
      if (data.length === 0) {
        msg: 'The employee could not be updated'
      }
    })
    .catch(() => {
      res.status(500).send({
        msg: 'Server Error'
      })
    })
    .catch(() => {
      res.status(400).send({
        msg: 'Invalid input'
      })
    })
})

const addemployee = catchAsync((req, res) => {
  db.query('SELECT * FROM employee ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'Employee added successfully',
        data: result.rows
      })
    })
    .catch(() => {
      res.status(500).send({
        msg: 'Server Error'
      })
    })
    .catch(() => {
      res.status(400).send({
        msg: 'Invalid input'
      })
    })
})

const deleteemployee = catchAsync((req, res) => {
  db.query('SELECT * FROM employee ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'The employee has been deleted successfully',
        data: result.rows
      })
    })
    .catch(() => {
      res.status(500).send({
        msg: 'server error!!'
      })
    })
})

module.exports = {
  getEmployees,
  editemployee,
  addemployee,
  deleteemployee
}
