const express = require("express");
const filmsRoutes = express.Router();
const filmsController = require('../../controllers/filmsController');
const authController = require('../../controllers/authController');
// QUẢN LÝ FILMS

filmsRoutes.get("/getBanner", 
                authController.checkToken,
                filmsController.getBanner);
filmsRoutes.get("/getListMovie", 
                authController.checkToken,
                filmsController.getListMovie);
filmsRoutes.get("/getInfoMovie/:id",
               authController.checkToken, 
               filmsController.getInfoMovie);
filmsRoutes.delete("/deleteMovie/:id",
                authController.checkToken, 
                filmsController.deleteMovie);
filmsRoutes.get("/getListMovieOfDay",
                authController.checkToken,
                filmsController.getListMoiveOfDay
);
filmsRoutes.post("/addPhim",
               authController.checkToken, 
               filmsController.addPhim);
filmsRoutes.post("/updatePhim",
               authController.checkToken,
               filmsController.updatePhim);

module.exports = filmsRoutes;