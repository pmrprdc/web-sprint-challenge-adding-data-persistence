const express = require('express');
const resourcesRouter = require('./resource/router'); // adjust path as needed
const projectsRouter = require('./project/router');
const tasksRouter = require('./task/router')   // adjust path as needed

const server = express();

server.use(express.json());

// Use routers
server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter)

// ...

module.exports = server;
