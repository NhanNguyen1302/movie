const express = require('express');
const ticketRoutes = express.Router();
const { bookTicket,
        getTicketList, 
        createShowTime} = require('../../controllers/ticketController');
const authController = require('../../controllers/authController');

// QUẢN LÝ VÉ
ticketRoutes.post('/DatVe', 
    // Middleware
    authController.checkToken,
    bookTicket
);
ticketRoutes.get('/LayDanhSachPhongVe', 
    // Middleware
    authController.checkToken,
    getTicketList
);
ticketRoutes.post('/TaoLichChieu', 
    // Middleware
    authController.checkToken,
    createShowTime
);
module.exports = ticketRoutes;