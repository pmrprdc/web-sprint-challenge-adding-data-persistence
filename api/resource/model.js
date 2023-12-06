// build your `Resource` model here
// resourcesDataAccess.js

const db = require('../../data/dbConfig'); // Adjust the path to your Knex configuration

function addResource(resourceData) {
    return db('resources').insert(resourceData).returning('*');
}

function getAllResources() {
    return db('resources').select('*');
}

module.exports = {
    addResource,
    getAllResources
};
