const { successCode, errCode, failCode } = require('../utils/response');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const models = initModels(sequelize);

//GET lấy thông tin rạp
const getInfoThead = async (req, res) => {
    try {
        let dataInfoThead = await models.He_thong_rap.findOne({ ma_hethong_rap: req.params.id });
        if (dataInfoThead) {
            successCode(res, dataInfoThead)
        } else {
            errCode(res, 'Không thấy dữ liệu')
        }
    } catch {
        failCode(res)
    }
}
// GET hệ thống rạp <> cụm rạp
const getInfoTheadFromSystem = async (req, res) => {
    try {
        const data = await models.He_thong_rap.findAll({ include: ["CumRaps"] });
        if (data) {
            successCode(res, data)
        } else {
            errCode(res, 'Không thấy dữ liệu')
        }
    } catch {
        failCode(res);
    }
}
// GET lấy thông tin lịch chiếu theo rạp
const getShowTimeFromTheater = async (req, res) => {

    let dataShowTime = await models.LichChieu.findAll({include: ["ma_rap_RapPhim"]});
    if(dataShowTime){
        successCode(res, dataShowTime)
    }else{
        errCode(res, 'Không tìm thấy')
    }
}
// GET lấy thông tin lịch chiếu phim
const getShowTimeFilms = async (req, res) => {
    try {
        let dataShowTimeFilms = await models.LichChieu.findAll();
        if (dataShowTimeFilms) {
            successCode(res, dataShowTimeFilms)
        } else {
            errCode(res, 'Không thấy dữ liệu')
        }
    } catch {
        failCode(res)
    }
}

module.exports = {
    getInfoThead,
    getInfoTheadFromSystem,
    getShowTimeFromTheater,
    getShowTimeFilms
}