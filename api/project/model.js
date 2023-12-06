// projectsDataAccess.js

const db = require('../../data/dbConfig');

function addProject(projectData) {
    // Convert boolean to integer for database storage
    projectData.project_completed = projectData.project_completed ? 1 : 0;

    return db('projects')
        .insert(projectData)
        .returning('*') // Return all fields of the newly added project
        .then(projects => projects[0]) // Assuming that the database returns an array
        .then(project => ({
            ...project,
            project_completed: project.project_completed === 1 // Convert back to boolean
        }));
}

function getAllProjects() {
    return db('projects').select('*').then(projects =>
        projects.map(project => ({
            ...project,
            project_completed: project.project_completed === 1
        }))
    );
}

module.exports = {
    addProject,
    getAllProjects
};

  
  
