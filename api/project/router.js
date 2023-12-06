// projects-router.js

const express = require('express');
const router = express.Router();
const dataAccess = require('./model'); // Adjust the path as needed

// [POST] /api/projects
router.post('/', async (req, res) => {
    // Check if project_name is provided
    if (!req.body.project_name) {
        // If project_name is missing, respond with a 400 Bad Request status
        return res.status(400).json({ message: 'Project name is required' });
    }

    try {
        const newProject = await dataAccess.addProject(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        // Error handling, e.g., respond with a 500 Internal Server Error status
        res.status(500).json({ message: 'Error adding the project' });
    }
});


// [GET] /api/projects
router.get('/', async (req, res) => {
    try {
        const projects = await dataAccess.getAllProjects();
        res.json(projects);
    } catch (error) {
        // Error handling
    }
});

module.exports = router;
