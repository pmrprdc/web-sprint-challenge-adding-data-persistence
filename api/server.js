const express = require('express');
const server = express();

// Middleware
server.use(express.json()); // for parsing application/json

// Basic Route
server.get('/', (req, res) => {
  res.send('Hello World!');
});

// Export the server
module.exports = server;