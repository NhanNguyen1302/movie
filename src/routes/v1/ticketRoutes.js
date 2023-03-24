const express = require('express');
const ticketRoutes = express.Router();
const ticketController = require('../../controllers/ticketController');

ticketRoutes.post('bookTicket', 
    // Middleware
    ticketController.bookTicket
);


module.exports = ticketRoutes;