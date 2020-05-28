const { Router } = require('express');

const NoteController = require('./Controllers/NoteController')

const routes = Router();

routes.get('/notes', NoteController.index);
routes.post('/notes', NoteController.store);

module.exports = routes;