const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { getSites } = require('../database/models/Site')

const getSitesName = catchAsync(async (req, res) => {
  const data = await getSites()
  if (data) {
    res.status(200).json({
      message: 'sites retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no sites found',
      data: ''
    })
  }
})

module.exports = { getSitesName }
