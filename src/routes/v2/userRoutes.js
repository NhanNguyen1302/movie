const express = require("express");
const userRoutes = express.Router();
const userController = require('../../controllers/userController');
const authController = require('../../controllers/authController');
// QUẢN LÝ USER

// Đăng ký
userRoutes.post("/DangKy",userController.signUp);
// Đăng nhập
userRoutes.post("/DangNhap",userController.signIn);
// Lấy danh sách loại user
userRoutes.get("/LayDanhSachLoaiNguoiDung",
               authController.checkToken,
               userController.getAllUser);
// Tìm kiếm user
userRoutes.get("/TimKiemNguoiDung",
              authController.checkToken,
              userController.findUser);
// Lấy thông tin user: 
userRoutes.post("/LayThongTinNguoiDung/:id",
               authController.checkToken,
               userController.getUser);
// Add user
userRoutes.post("/ThemNguoiDung",
               authController.checkToken, 
               userController.addUser);
// PUT update user
userRoutes.put("/CapNhatThongTinNguoiDung/:id",
               authController.checkToken,
               userController.updateUser);
// DELETE xoá user
userRoutes.delete("/XoaNguoiDung/:id",
               authController.checkToken, 
               userController.deleteUser);

module.exports = userRoutes;