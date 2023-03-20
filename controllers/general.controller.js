const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const home = catchAsync((req, res) => {
  res.send('Hello, World!')
})

const errorExample = catchAsync((req, res) => {
  throw new ApiError(500, 'Eshi enfajar')
})

module.exports = {
  home,
  errorExample
}
