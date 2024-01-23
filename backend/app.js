const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000; // Use the provided port or default to 3000
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const socket = require('socket.io');
const http = require('http');

connectDB(); // Connect to the database

const temperatures = require('./routes/api/temperatures');

const app = express();
const server = http.createServer(app);
const io = socket(server);



// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use('/api/temperatures', temperatures); // Use the temperatures router for all routes starting with /api/temperatures (e.g. /api/temperatures/record-temperature)

app.use(errorHandler)

io.on('connection', (socket) => {
  console.log('New client connected')});

//   socket.on('message', (data) => {
//     io.emit('message', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// Start the Express.js server
server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
