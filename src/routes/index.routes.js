const express = require('express')
const rootRoutes = express.Router();
const ticketRoutes = require('./v1/ticketRoutes');
const userRoutes = require('./v2/userRoutes');
const theadRoutes = require('./v3/theadRoutes');
const filmsRoutes = require('./v4/filmsRoutes');


rootRoutes.use('/ManageTicket', ticketRoutes);
rootRoutes.use('/ManageUser', userRoutes);
rootRoutes.use('/ManageFilms', filmsRoutes);
rootRoutes.use('/ManageThead', theadRoutes);

module.exports = rootRoutes;