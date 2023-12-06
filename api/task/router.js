// tasks-router.js

const express = require('express');
const router = express.Router();
const dataAccess = require('./model'); // Adjust the path as needed

// [POST] /api/tasks
router.post('/', async (req, res) => {
    try {
        const newTask = await dataAccess.addTask(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        // Error handling
    }
});

// [GET] /api/tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await dataAccess.getAllTasksWithProjectInfo();
        res.json(tasks);
    } catch (error) {
        // Error handling
    }
});

module.exports = router;
