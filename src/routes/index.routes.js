const express = require('express')
const rootRoutes = express.Router();
const ticketRoutes = require('./v1/ticketRoutes');

rootRoutes.use('/ManageTicket', ticketRoutes);




module.exports = rootRoutes;