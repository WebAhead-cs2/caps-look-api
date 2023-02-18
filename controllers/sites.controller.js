//// site controller///

const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const logger = require('../logger')
const { createSite, editSite, deleteSite, getSites } = require('../database/models/Site')


const creatSiteDetails = catchAsync(async (req, res) => {
    const data = await createSite(
      req.body.SiteName,
      req.body.countryName,
    )
    logger.info(
      `the site name ${req.body.SiteName},${req.body.countryName},  created successfully`
    )
  
    if (data) {
      res.status(200).json({
        message: 'the site created successfully',
        data: data
      })
    } else {
      res.status(200).json({
        message: 'failed to creat site',
        data: ''
      })
    }
  })


const editSiteDetails = catchAsync(async (req, res) => {
    const data = await editSite(
      req.body.id,
      req.body.SiteName,
      req.body.countryName,
      
    )
    logger.info(
      `the data ${req.body.SiteName},${req.body.countryName},${req.body.id},  edited successfully`
    )
  
    if (data) {
      res.status(200).json({
        message: 'the site edited successfully',
        data: data
      })
    } else {
      res.status(200).json({
        message: 'failed to edit site',
        data: ''
      })
    }
  })

  const deleteSitesController = catchAsync(async (req, res) => {
    const data = await deleteSite(req.body.id)
    if (data) {
      res.status(200).json({
        message: 'Sites deleted successfully!',
        data: data
      })
    } else {
      res.status(200).json({
        message: 'no Sites found',
        data: ''
      })
    }
  })

const getSitesController = catchAsync(async (req, res) => {
  const data = await getSites()
  if (data) {
    res.status(200).json({
      message: 'Sites retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Sites found',
      data: ''
    })
  }
})

module.exports = {
  getSitesController,
  editSiteDetails,
  deleteSitesController,
  creatSiteDetails
}