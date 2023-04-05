const { successCode, errCode, failCode } = require("../utils/response");
const initModels = require("../models/init-models");
const sequelize = require("../models/index");
const models = initModels(sequelize);
const { Op } = require("sequelize");

const getBanner = async (req, res) => {
  try {
    let data = await models.Banner.findAll();
    if (data) {
      successCode(res, data, "lay danh sach Banner thanh cong");
    } else {
      failCode(res, data, " Lay danh sach Banner that bai");
    }
  } catch (err) {
    errCode(res, "Loi backend");
  }
};

const getListMovie = async (req, res) => {
  try {
    let data = await models.Phim.findAll();
    if (data) {
      successCode(res, data, "lay danh sach phim thanh cong");
    } else {
      failCode(res, data, "lay danh sach phim that bai");
    }
  } catch (err) {
    errCode(res, "loi backend");
  }
};

const getInfoMovie = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await models.Phim.findOne({
      where: {
        ma_phim: id,
      },
    });
    if (data) {
      successCode(res, data, "lay thong tin phim thanh cong");
    } else {
      failCode(res, id, "lay thong tin phim that bai");
    }
  } catch (err) {
    errCode(res, "loi backend");
  }
};

const deleteMovie = async (req, res) => {
  try {
    let { id } = req.params;
    let data = models.Phim.destroy({
      where: {
        ma_phim: id,
      },
    });
    if (data) {
      successCode(res, data, "xoa phim thanh cong");
    } else {
      failCode(res, data, "xoa phim that bai");
    }
  } catch (err) {
    errCode(res, "Loi backend");
  }
};

const getListMoiveOfDay = async (req, res) => {
  try {
    let { startDay, endDay } = req.body;

    const { endDay2 } = sequelize.fn("", sequelize.col(endDay));
    let data = await models.LichChieu.findAll({
      where: {
        ngay_gio_chieu: {
          [Op.between]: [startDay, endDay],
        },
      },
      include: ["ma_phim_Phim"],
    });

    if (data)
      return successCode(res, data, "Lay danh sach phim theo ngay thanh cong");
  } catch (err) {
    errCode(res, err);
  }
};

const addPhim = async (req, res) => {
  try {
    let {
      ten_phim,
      hinh_anh,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = req.body;

    let newPhim = {
      ten_phim,
      hinh_anh,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    };
    let data = await models.Phim.create(newPhim);
    if (data) {
      successCode(res, data, "Them phim thanh cong");
    } else {
      failCode(res, data, "them phim that bai");
    }
  } catch (err) {
    errCode(res);
  }
};
const updatePhim = async (req, res) => {
  try {
    let {
      ten_phim,
      hinh_anh,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = req.body;

    let newPhim = {
      ten_phim,
      hinh_anh,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    };
    let data = await models.Phim.update(newPhim, {
      where: {
        ten_phim: ten_phim,
      },
    });
    if (data) {
      successCode(res, data, "Update phim thanh cong");
    } else {
      failCode(res, data, "update phim that bai");
    }
  } catch (err) {
    errCode(res);
  }
};

module.exports = {
  getBanner,
  getListMovie,
  getInfoMovie,
  deleteMovie,
  getInfoMovie,
  getListMoiveOfDay,
  addPhim,
  updatePhim,
};