const express = require('express');
const userRoutes = express.Router();
const {signUp, signIn} = require('../../controllers/userController');

userRoutes.post('/DangKy', 
    // Middleware

    signUp
);
userRoutes.post('/DangNhap', 
    // Middleware

    signIn
);


module.exports = userRoutes;