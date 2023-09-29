const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Middleware to parse JSON request bodies
// app.use(bodyParser.json());

// API endpoint to record temperature data
router.post('/record-temperature', async (req, res) => {
  try {
    const { timestamp, value, unit, device_id, data_source } = req.body;

    if (!timestamp || !value || !unit || !device_id || !data_source) {
      return res.status(400).json({ error: 'Missing required fields in the request body.' });
    }

    const newTemperatureReading = new TemperatureReading({
      timestamp,
      value,
      unit,
      device_id,
      data_source,
    });

    await newTemperatureReading.save();

    res.json({ message: 'Temperature reading recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;