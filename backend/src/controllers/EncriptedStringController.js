const connection = require('../database/connection');
const crypto = require('crypto');
const encKey = process.env.KEY;
const iv = process.env.IV;

function encrypted(phrase) {
    console.log(typeof iv);
    let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
    let encrypted = cipher.update(phrase, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

function decrypted(phrase) {
    let decipher = crypto.createDecipheriv('aes-256-cbc', encKey, iv);
    console.log(decipher);
    let decrypted = decipher.update(phrase, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
}

module.exports = {
    async create(req, res) {
        const { name } = req.body;
        try {
            const encrypted_phrase = encrypted(name);
            const [insertedString] = await connection('encryptedString').
                returning('*').
                insert({
                    'encrypted_name': encrypted_phrase
                });
            return res.json(insertedString);
        } catch (error) {
            return res.json(error);
        }
    },

    async show(req, res) {
        const { id } = req.params;
        try {
            let search = await connection('encryptedString').where('id', '=', id).select('*').first();

            if (!search) {
                return res.status(404).send({ Error: "String Not Found!!!" });
            }

            let desencrypt = decrypted(search.encrypted_name);
            //      console.log(desencrypt);
            // search.encrypted_name = desencrypt;
            return res.json(desencrypt);
        } catch (error) {
            return res.json({ code: "E_VALIDATION_FAILURE", message: "O campo \"id\" é obrigatório" });
        }
    }
}