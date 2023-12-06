// resources-router.js
const express = require('express');
const router = express.Router();
const dataAccess = require('./model'); // Adjust the path as needed

// [POST] /api/resources
router.post('/', async (req, res) => {
    try {
        const newResource = await dataAccess.addResource(req.body);
        res.status(201).json(newResource);
    } catch (error) {
        // Check for a unique constraint violation
        if (error.code === 'SQLITE_CONSTRAINT' || error.code === '23505') { // '23505' is the code for unique violation in PostgreSQL
            return res.status(400).json({ message: 'A resource with this name already exists' });
        }
        // General error handling
        res.status(500).json({ message: 'Error adding the resource' });
    }
});


// [GET] /api/resources
router.get('/', async (req, res) => {
    try {
        const resources = await dataAccess.getAllResources();
        res.json(resources);
    } catch (error) {
        // Error handling
    }
});

module.exports = router;
