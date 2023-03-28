
const { successCode, errCode, failCode } = require('../utils/response');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const models = initModels(sequelize);

// GET lấy danh sách Banner
const getBannerList = async (req, res) => {
    try {
        let dataBannerList = await models.Banner.findAll();
        if (dataBannerList) {
            successCode(res, dataBannerList)
        } else {
            errCode(res, 'Không tìm thấy dữ liệu')
        }
    } catch {
        failCode(res)
    }

}
// GET lấy danh sách film
const getFilms = async (req, res) => {
    try {
        let dataFilms = await models.Phim.findAll();
        if (dataFilms) {
            successCode(res, dataFilms)
        } else {
            errCode(res, 'Không tìm thấy phim')
        }
    } catch {
        failCode(res)
    }

}
// GET lấy danh sách phim phân trang

// GET lấy danh sách phim theo ngày

// POST thêm phim upload hình
// POST cật nhật phim upload
// POST quản lý phim
// DELETE XP
// DELETE xoá phim
// GET lấy thông tin phim
module.exports = {
    getBannerList,
    getFilms,
    
}