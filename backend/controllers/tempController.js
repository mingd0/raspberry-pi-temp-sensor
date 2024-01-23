const asyncHandler = require('express-async-handler')
const Temperature = require('../models/Temperature')

// @desc    Get temperatures
// @route   GET api/temperatures
// @access  Private
const getTemperatures = asyncHandler(async (req, res) => {
  const temps = await Temperature.find()

  res.status(200).json(temps)
})

// @desc    Set temperature
// @route   POST api/temperatures
// @access  Private
const setTemperature = asyncHandler(async (req, res) => {

  const temp = await Temperature.create({
    // timestamp: defaults to Date.now
    measurement: req.body.measurement,
    unit: req.body.unit,
    device_id: req.body.device_id,
    data_source: req.body.data_source
  })

  res.status(200).json(temp)
})

module.exports = {
  getTemperatures,
  setTemperature
}