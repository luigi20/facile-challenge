exports.up = function (knex) {
    return knex.schema.createTable('encryptedString', function (table) {
        table.increments('id').primary();
        table.string('encrypted_name').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('encryptedString');
};