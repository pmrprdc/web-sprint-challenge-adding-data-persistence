/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('resources').then(exists => {
        if (!exists) {
            return knex.schema.createTable('resources', table => {
                table.increments('resource_id'); // Primary key
                table.string('resource_name').notNullable().unique(); // Required and unique
                table.text('resource_description'); // Optional
            });
        }
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
