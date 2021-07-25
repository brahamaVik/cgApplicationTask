const express = require('express');
const routes = express.Router();
const botJsonControllers = require('../controllers/botJson.controller');

/**
 * Get all bots and print to the console all the bot information
 */
 routes.get('/all', (req, res, next) => {
    botJsonControllers.getAll(req, res);
});

/**
 * Get one bot and print to the console information about that particular bot
 */
routes.get('/one/:id', (req, res, next) => {
    botJsonControllers.getOne(req, res);
});

/**
 * Add a new bot
 */
routes.post('/add/newbot', (req, res, next) => {
    botJsonControllers.addData(req, res);
})

/**
 * Update a bot
 */
 routes.put('/edit/:id', (req, res, next) => {
    botJsonControllers.editData(req, res);
})

/**
 * Delete a bot
 */
 routes.delete('/delete/:id', (req, res, next) => {
    botJsonControllers.deleteData(req, res);
})

module.exports = routes;
