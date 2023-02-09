const catchAsync = require('../utils/catchAsync')
const db = require('../database/connection')

const getProjects = catchAsync((req, res) => {
  db.query('SELECT * FROM project ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'all projects retrieved successfully.',
        data: result.rows
      })
    })
    .catch(() => {
      res.status(500).send({
        msg: 'Unexpected error!!'
      })
    })
})

const editproject = catchAsync((req, res) => {
  db.query('SELECT * FROM project ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'Project updated successfully',
        data: result.rows
      })
      if (data.length === 0) {
        msg: 'The project could not be updated'
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

const addproject = catchAsync((req, res) => {
  db.query('SELECT * FROM project ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'Project added successfully',
        data: result.rows
      })
      if (data.length === 0) {
        msg: 'The project could not be updated'
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

const deleteproject = catchAsync((req, res) => {
  db.query('SELECT * FROM project ')
    .then((result) => {
      const data = result.rows
      res.status(200).send({
        successmsg: 'The project has been deleted successfu'
      })
      if (data.length === 0) {
        msg: 'The project could not be deleted'
      }
    })
    .catch(() => {
      res.status(500).send({
        msg: 'server error!!'
      })
    })
})

module.exports = {
  getProjects,
  editproject,
  addproject,
  deleteproject
}
