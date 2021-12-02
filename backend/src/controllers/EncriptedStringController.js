const connection = require('../database/connection');
const crypto = require('crypto');
const ENC_KEY = process.env.ENC_KEY;
const IV = process.env.IV;

function encrypted(phrase) {
    let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
    let encrypted = cipher.update(phrase, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

function decrypted(phrase) {
    let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
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
            return res.json({ code: "E_VALIDATION_FAILURE", message: "O campo \"name\" é obrigatório" });
        }
    },

    async show(req, res) {
        const { id } = req.params;
        try {
            let search = await connection('encryptedString').where('id', '=', id).select('*').first();
            if (!search) {
                return res.status(404).send({ Error: "String Not Found!!!" });
            }
            const desencrypt = decrypted(search.encrypted_name);
            search.encrypted_name = desencrypt;
            return res.json(search);
        } catch (error) {
            return res.json({ code: "E_VALIDATION_FAILURE", message: "O campo \"id\" é obrigatório" });
        }
    }
}