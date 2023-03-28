const express = require('express');
const userRoutes = express.Router();
const { signUp,
        signIn,
        getAllUser,
        findUser,
        // POST thông tin tài khoản
        // POST lấy thông tin user
        getUser,
        addUser,
        updateUser,
        deleteUser,
      } = require('../../controllers/userController');
const authController = require('../../controllers/authController');
// QUẢN LÝ USER

// Đăng ký
userRoutes.post('/DangKy', 
    authController.checkToken,
    signUp
);
// Đăng nhập
userRoutes.post('/DangNhap', 
    authController.checkToken,
    signIn
);
// Lấy danh sách loại user
userRoutes.get('/LayDanhSachLoaiNguoiDung',
    authController.checkToken,
    getAllUser
);
// Tìm kiếm user
userRoutes.get('/TimKiemNguoiDung',
    authController.checkToken,
    findUser
);
// POST thông tin tài khoản: CHƯA XONG

// Lấy thông tin user: CHƯA XONG
userRoutes.post('/LayThongTinNguoiDung/:id',
    authController.checkToken,  
    //getUser
);
// Add user
userRoutes.post('/ThemNguoiDung',
    authController.checkToken,  
    addUser
);
// PUT update user
userRoutes.put('/CapNhatThongTinNguoiDung/:id',
    authController.checkToken,  
    updateUser
);
// DELETE xoá user
userRoutes.delete('/XoaNguoiDung/:id', 
    authController.checkToken,
    deleteUser
);
module.exports = userRoutes;