const { successCode, errCode, failCode } = require("../utils/response");
const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const models = initModels(sequelize);
const authController = require("./authController");

// POST đăng ký user
const signUp = async (req, res) => {
  //   try {
  let { tai_khoan, ho_ten, email, mat_khau, so_dt, loai_nguoi_dung } = req.body;

  let newUser = {
    tai_khoan,
    ho_ten,
    email,
    mat_khau: authController.hashPass(mat_khau),
    so_dt,
    loai_nguoi_dung,
  };
  const checkEmail = await models.NguoiDung.findAll({
    where: { email: email },
  });
  if (checkEmail.length > 0) {
    failCode(res, "Email đã tồn tại!");
  } else {
    const dataUser = await models.NguoiDung.create(newUser);
    if (dataUser) {
      successCode(res, dataUser);
    } else {
      failCode(res, "Không thấy dữ liệu");
    }
  }
  //   } catch {
  //     failCode(res);
  //   }
};
// POST đăng nhập
const signIn = async (req, res) => {
  try {
    const { email, matKhau } = req.body;
    const checkEmail = await models.NguoiDung.findOne({ where: { email } });
    if (checkEmail) {
      const { mat_khau } = checkEmail.dataValues;
      const checkPassword = authController.comparePass(matKhau, mat_khau);
      if (checkPassword) {
        const token = authController.generateToken(checkEmail.dataValues);
        successCode(res, token);
      } else {
        errCode(res, "Mật khẩu không đúng!");
      }
    } else {
      errCode(res, "Email không đúng!");
    }
  } catch {
    failCode(res);
  }
};
// GET lấy danh sách người dùng
const getAllUser = async (req, res) => {
  try {
    let dataAllUser = await models.NguoiDung.findAll();
    if (dataAllUser) {
      successCode(res, dataAllUser);
    } else {
      errCode(res, "Không thấy dữ liệu");
    }
  } catch {
    failCode(res);
  }
};
// GET tìm kiếm người dùng
const findUser = async (req, res) => {
  try {
    let { email } = req.body;
    let data = await model.image.findAll({
      where: {
        name_img: {
          [Op.like]: `%${email}%`,
        },
      },
    });
    if (data) {
      successCode(res, dataSearchUser);
    } else {
      failCode(res, "Không tìm thấy user");
    }
  } catch {
    errCode(res, "lỗi backend");
  }
};
// POST lấy thông tin user
const getUser = async (req, res) => {
  let dataUser = await models.NguoiDung.findOne({
    where: { tai_khoan: req.params.id },
  });
  if (dataUser) {
    successCode(res, dataUser);
  } else {
    errCode(res, "User không tồn tại");
  }
};
// POST add user
const addUser = async (req, res) => {
  try {
    let { email, mat_khau, so_dien_thoai, ma_nhom, loai_nguoi_dung, ho_ten } =
      req.body;
    let newPerson = {
      email,
      mat_khau: authController.hashPass(mat_khau),
      so_dien_thoai,
      ma_nhom,
      loai_nguoi_dung,
      ho_ten,
    };
    const checkMail = await models.NguoiDung.findAll({
      where: { email: email },
    });
    if (checkMail.length > 0) {
      errCode(res, "Email đã tồn tại");
    } else {
      const dataAddUser = await models.NguoiDung.create(newPerson);
      if (dataAddUser) {
        successCode(res, dataAddUser);
      } else {
        errCode(res, "Không thấy dữ liệu user");
      }
    }
  } catch {
    failCode(res);
  }
};
// PUT update user
const updateUser = async (req, res) => {
  let { id } = req.params;
  let userUpdate = await models.NguoiDung.findOne({ where: { tai_khoan: id } });
  if (userUpdate) {
    let { email, mat_khau, so_dien_thoai, ma_nhom, loai_nguoi_dung, ho_ten } =
      req.body;
    let updatePerson = {
      email,
      mat_khau: authController.hashPass(mat_khau),
      so_dien_thoai,
      ma_nhom,
      loai_nguoi_dung,
      ho_ten,
    };
    const dataUpdate = await models.NguoiDung.update(updatePerson, {
      where: { tai_khoan: id },
    });
    if (dataUpdate[0] === 1) {
      successCode(res, dataUpdate);
    } else {
      errCode(res, "Chưa cập nhật");
    }
  }
};
// DELETE xoá user
const deleteUser = async (req, res) => {
  let { id } = req.params;
  let deleteData = await models.NguoiDung.destroy({ where: { tai_khoan: id } });
  if (deleteData) {
    successCode(res, deleteData);
  } else {
    errCode(res, id, "User không tồn tại");
  }
};

// Tìm kiếm loại người dùng

module.exports = {
  signUp,
  signIn,
  getAllUser,
  findUser,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};