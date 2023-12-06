// build your `Task` model here
// tasksDataAccess.js

const db = require('../../data/dbConfig');

// tasksDataAccess.js

function addTask(taskData) {
    // Convert boolean to integer for database storage
    taskData.task_completed = taskData.task_completed ? 1 : 0;

    return db('tasks')
        .insert(taskData)
        .returning('*') // Return all fields of the newly added task
        .then(tasks => tasks[0]) // Assuming the database returns an array
        .then(task => ({
            ...task,
            task_completed: task.task_completed === 1 // Convert back to boolean
        }));
}


function getAllTasksWithProjectInfo() {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.*', 'projects.project_name', 'projects.project_description')
        .then(tasks =>
            tasks.map(task => ({
                ...task,
                task_completed: task.task_completed === 1
            }))
        );
}

module.exports = {
    addTask,
    getAllTasksWithProjectInfo
}