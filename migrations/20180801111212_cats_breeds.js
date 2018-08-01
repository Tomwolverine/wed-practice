//run this (export.up) when you migrate:latest
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cat_breeds', (table) => {
        table.increments()
        table.text('breed')
        table.integer('popularity')
    })
};
// run this (export.down) when you migrate:rollback
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cat_breeds')
};
