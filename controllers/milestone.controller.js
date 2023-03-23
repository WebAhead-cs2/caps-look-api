const catchAsync = require('../utils/catchAsync')
const logger = require('../logger')
const {
  createMilestone,
  editMilestone,
  archiveMilestone,
  getMilestones,
  getMilestonesProject
} = require('../database/models/Milestone')

const createMilestoneDetails = catchAsync(async (req, res) => {
  const data = await createMilestone(
    req.body.mileStoneName,
    req.body.StartDate,
    req.body.EndDate,
    req.body.project_id,
    req.body.description
  )
  if (data) {
    res.status(200).json({
      message: 'the Milestone created successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to creat Milestone',
      data: ''
    })
  }
})

const editMilestoneDetails = catchAsync(async (req, res) => {
  const data = await editMilestone(
    req.params.id,
    req.body.mileStoneName,
    req.body.StartDate,
    req.body.EndDate,
    req.body.project_id,
    req.body.description
  )

  if (data) {
    res.status(200).json({
      message: 'the Milestone edited successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'failed to edit Milestone',
      data: ''
    })
  }
})

const archiveMilestonesController = catchAsync(async (req, res) => {
  const data = await archiveMilestone(req.params.id)
  if (data) {
    res.status(200).json({
      message: 'Milestones deleted successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Milestones found',
      data: ''
    })
  }
})

const getMilestonesController = catchAsync(async (req, res) => {
  const data = await getMilestones()
  if (data) {
    res.status(200).json({
      message: 'Milestones retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Milestones found',
      data: ''
    })
  }
})

const getMilestonesProjectDetails = catchAsync(async (req, res) => {
  const data = await getMilestonesProject(req.body.project_id)
  if (data) {
    res.status(200).json({
      message: 'Milestones project retrieved successfully!',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no Milestones project found',
      data: ''
    })
  }
})
module.exports = {
  getMilestonesController,
  editMilestoneDetails,
  archiveMilestonesController,
  createMilestoneDetails,
  getMilestonesProjectDetails
}
