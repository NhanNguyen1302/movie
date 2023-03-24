const express = require('express');
const ticketRoutes = express.Router();
const {bookTicket, getTicketList} = require('../../controllers/ticketController');

ticketRoutes.post('/bookTicket', 
    // Middleware
    bookTicket
);
ticketRoutes.get('/bookTicket', 
    // Middleware
    getTicketList
);

module.exports = ticketRoutes;