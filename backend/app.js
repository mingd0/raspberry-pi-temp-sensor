const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// const cors = require('cors');

const temperatures = require('./routes/api/temperatures');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

connectDB(); // Connect to the database

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use('/api/temperatures', temperatures); // Use the temperatures router for all routes starting with /api/temperatures (e.g. /api/temperatures/record-temperature


// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
