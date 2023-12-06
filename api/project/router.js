// projects-router.js

const express = require('express');
const router = express.Router();
const dataAccess = require('./model'); // Adjust the path as needed

// [POST] /api/projects
router.post('/', async (req, res) => {
    try {
        const newProject = await dataAccess.addProject(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        // Error handling
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
