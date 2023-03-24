const {successCode, errCode, failCode} = require('../utils/response');
const initModels = require("../models/init-models")
const sequelize = require("../models/index")
const models = initModels(sequelize);
const authController = require('./authController');
// POST đăng ký user
const signUp = async (req, res) => {
    try{
        let {   tai_khoan,
                ho_ten,
                email,
                mat_khau,
                so_dt,
                loai_nguoi_dung
            } = req.body;
        let newUser = {
                tai_khoan,
                ho_ten,
                email,
                mat_khau,
                so_dt,
                loai_nguoi_dung
        }
        const checkEmail = await models.NguoiDung.findAll({
            where: {email: email}
        });
        if(checkEmail.length > 0) {
            errCode(res, 'Email đã tồn tại!')
        }else {
            const dataUser = await models.NguoiDung.create(newUser);
            if(dataUser) {
                successCode(res, 'Thành công!')
            }else {
                errCode(res, 'Thất bại!')
            }
        }
    }catch{
        failCode(res, 'Lỗi backend!!!')
    }
}
// POST đăng nhập
const signIn = async (req, res) => {
    const {email, matKhau} = req.body;
    const checkEmail = await models.NguoiDung.findOne({
        where: {email}
    });
    if(checkEmail) {
        const {mat_khau} = checkEmail.dataValues;
        const checkPassword = authController.comparePass(matKhau, mat_khau);
        if(checkPassword) {
            const token = authController.generateToken(checkEmail.dataValues);
            successCode(res, token)
        }else {
            errCode(res, 'Mật khẩu không đúng!')
        }
    }else {
        errCode(res, 'Email không đúng!');
    }
}



module.exports = {
    signUp,
    signIn
}