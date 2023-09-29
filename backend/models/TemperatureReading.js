const mongoose = require('mongoose');

// Define a TemperatureReading schema and model
const TemperatureReadingSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  },
  value: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true,
    default: "Farhenheit"
  },
  device_id: {
    type: String,
    required: true
  },
  data_source: {
    type: String,
    required: true
  }
});


const TemperatureReading = mongoose.model('Temperature', temperatureReadingSchema);