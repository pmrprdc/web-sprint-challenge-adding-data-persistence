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
        // Error handling
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
