const express = require('express');
const filmsRoutes = express.Router();
const {getBannerList, getFilms, getFilmDay} = require('../../controllers/filmsController')
const authController = require('../../controllers/authController');
// QUẢN LÝ FILMS

filmsRoutes.get('/LayDanhSachBanner', 
    // Middleware
    authController.checkToken,
    getBannerList
);
filmsRoutes.get('/LayDanhSachPhim', 
    // Middleware
    authController.checkToken,
    getFilms
);


filmsRoutes.get('/LayDanhSachPhim', 
    // Middleware
    authController.checkToken,
    
);


module.exports = filmsRoutes;