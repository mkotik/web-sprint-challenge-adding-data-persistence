const express = require("express");

const server = express();

server.use(express.json());

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});
module.exports = server;
