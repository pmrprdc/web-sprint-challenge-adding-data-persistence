// build your `Resource` model here
// resourcesDataAccess.js

const db = require('../../data/dbConfig'); // Adjust the path to your Knex configuration

function addResource(resourceData) {
    return db('resources')
        .insert(resourceData)
        .returning('*') // Return all fields of the newly added resource
        .then(resources => resources[0]); // Assuming the database returns an array
}

function getAllResources() {
    return db('resources').select('*');
}

module.exports = {
    addResource,
    getAllResources
};
