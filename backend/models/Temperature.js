const mongoose = require('mongoose');

// Define a Temperature schema and model
const TemperatureSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  measurement: {
    type: Number,
    required: true
  },
  unit: String,
  device_id: String,
  data_source: String
})

const Temperature = mongoose.model('Temperature', TemperatureSchema);

module.exports = Temperature;