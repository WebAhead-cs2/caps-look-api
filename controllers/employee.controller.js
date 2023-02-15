const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const {
  createEmployee,
  editEmployee,
  deleteEmployee, 
  getEmployees
} = require('../database/models/Employee')

const getEmployeesController = catchAsync(async(req, res) => {
  const data = await getEmployees()
    if(data){
      res.status(200).send({
        successmsg: 'all Employees retrieved successfully.',
        data: data
      })
    if (data.length === 0) {
        msg: 'No Employees provided!'
      }
    }
    else{
      res.status(500).send({
        msg: 'Unexpected error!!'
      })
    }})


const editemployeeController = catchAsync(async(req, res) => {
  const data = await editEmployee()
  if(data){
      res.status(200).send({
        successmsg: 'Employee details updated successfully',
        data: data
  })
}
    if (data.length === 0) {
        msg: 'The employee could not be updated'
      }
    else{
      res.status(500).send({
      msg: 'Server error!!'
    })
    res.status(400).send({
      msg: 'Invalid input'
    })
}})

const addemployeeCntroller = catchAsync(async(req, res) => {
  const data = await createEmployee()
  if(data){
      res.status(200).send({
        successmsg: 'Employee added successfully',
        data: data
      })
   }
   else{
    res.status(500).send({
    msg: 'Server error!!'
  })
  res.status(400).send({
    msg: 'Invalid input'
  })
}})

const deleteemployeeController = catchAsync(async(req, res) => {
  const data = await deleteEmployee()
  if(data){
      res.status(200).send({
        successmsg: 'The employee has been deleted successfully',
        data: data
      })
    }
    else{
      res.status(500).send({
      msg: 'Server error!!'
    })
}})

module.exports = {
  getEmployeesController,
  editemployeeController,
  addemployeeCntroller,
  deleteemployeeController
}
