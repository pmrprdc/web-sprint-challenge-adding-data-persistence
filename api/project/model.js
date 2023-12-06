// projectsDataAccess.js

const db = require('../../data/dbConfig');

function addProject(projectData) {
    projectData.project_completed = projectData.project_completed ? 1 : 0;
    return db('projects').insert(projectData).returning('*');
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

  
  
