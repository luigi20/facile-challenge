const express = require('express');
const routes = express.Router();
const EncriptedStringController = require('./controllers/EncriptedStringController');


routes.post('/encrypt', EncriptedStringController.create);
routes.get('/show/:id', EncriptedStringController.show);

module.exports = routes;