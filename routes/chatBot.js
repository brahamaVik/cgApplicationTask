const express = require('express');
const routes = express.Router();
const botControllers = require('../controllers/chatbot.controller');

/**
 * Get all bots and print to the console all the bot information
 */
routes.get('/all', (req, res, next) => {
    botControllers.getAll(req, res);
});

/**
 * Get one bot and print to the console information about that particular bot
 */
routes.get('/one/:id', (req, res, next) => {
    botControllers.getOne(req, res);
});

/**
 * Add a new bot
 */
routes.post('/add/newbot', (req, res, next) => {
    botControllers.addData(req, res);
})

/**
 * Update a bot
 */
 routes.put('/edit/:id', (req, res, next) => {
    botControllers.editData(req, res);
})

/**
 * Delete a bot
 */
 routes.delete('/delete/:id', (req, res, next) => {
    botControllers.deleteData(req, res);
})

module.exports = routes;
