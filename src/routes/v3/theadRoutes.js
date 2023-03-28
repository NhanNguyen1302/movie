const express = require('express');
const { getInfoThead,
        getInfoTheadFromSystem, 
        getShowTimeFilms,
        getShowTimeFromTheater} = require('../../controllers/theadController');
const theadRoutes = express.Router();
const authController = require('../../controllers/authController');

// QUẢN LÝ RẠP

theadRoutes.get('/LayThongTinHeThongRap/:id',
    // Middleware
    authController.checkToken,
    getInfoThead
)
theadRoutes.get('/LayThongTinLichChieuHeThongRap',
    // Middleware
    authController.checkToken,
    getShowTimeFromTheater
)
theadRoutes.get('/LayThongTinCumRapTheoHeThong',
    // Middleware
    authController.checkToken,
    getInfoTheadFromSystem
)
theadRoutes.get('/LayThongTinLichChieuPhim',
    // Middleware
    authController.checkToken,
    getShowTimeFilms
)



module.exports = theadRoutes;