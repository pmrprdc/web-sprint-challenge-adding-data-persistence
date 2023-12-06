/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('task_id'); // Primary key
      table.text('task_description').notNullable(); // Required
      table.text('task_notes'); // Optional
      table.boolean('task_completed').defaultTo(false); // Defaults to false
      table.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
      // Foreign key to 'projects' table
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
  };
