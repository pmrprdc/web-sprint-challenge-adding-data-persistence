// tasks-router.js

const express = require('express');
const router = express.Router();
const dataAccess = require('./model'); // Adjust the path as needed

// [POST] /api/tasks
router.post('/', async (req, res) => {
    // Check if task_description is provided
    if (!req.body.task_description) {
        // If task_description is missing, respond with a 400 Bad Request status
        return res.status(400).json({ message: 'Task description is required' });
    }

    try {
        const newTask = await dataAccess.addTask(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        // General error handling, respond with a 500 Internal Server Error status
        res.status(500).json({ message: 'Error adding the task' });
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
