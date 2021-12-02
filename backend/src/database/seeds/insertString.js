
exports.seed = function (knex) {

  // Inserts seed entries
  return knex('encryptedString').insert([
    { encrypted_name: 'PBxOJpErpgwfaVH/p2SSCRqMU+SCVGW3nnj0ZkRMbds=' },

  ]);
};
