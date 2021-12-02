
exports.seed = function (knex) {

  // Inserts seed entries
  return knex('encryptedString').insert([
    { encrypted_name: 'IOW1wIuVwzTouF9/V1oH38S3bLZ3eAFrbhTM1Z+jrko=' },

  ]);
};
