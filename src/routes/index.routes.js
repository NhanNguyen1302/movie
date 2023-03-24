const express = require('express')
const rootRoutes = express.Router();
const ticketRoutes = require('./v1/ticketRoutes');
const userRoutes = require('./v2/userRoutes');


rootRoutes.use('/ManageTicket', ticketRoutes);
rootRoutes.use('/ManageUser', userRoutes)


module.exports = rootRoutes;