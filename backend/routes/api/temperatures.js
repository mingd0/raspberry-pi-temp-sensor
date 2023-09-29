const express = require('express');
const router = express.Router();
const TemperatureReading = require('../../models/TemperatureReading')

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

// TODO tighten up queries
// TODO limit max size of query
// API endpoint to get temperature data
router.get('/temperature-data', async (req, res) => {
  try {
    const { startDate, endDate, deviceId } = req.query;

    const query = {};

    if (startDate && endDate) {
      query.timestamp = { $gte: startDate, $lte: endDate };
    }

    if (deviceId) {
      query.device_id = deviceId;
    }

    const historicalData = await TemperatureReading.find(query);

    res.json(historicalData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;