
const { successCode, errCode, failCode } = require('../utils/response');
const initModels = require("../models/init-models")
const sequelize = require("../models/index")
const models = initModels(sequelize);


// POST đặt vé
const bookTicket = async (req, res) => {
    try {
        let { ma_phim, ma_ghe } = req.body;
        let newTicket = {
            ma_phim,
            ma_ghe
        }
        const dataNewTicket = await models.Datve.create(newTicket);
        if (dataNewTicket) {
            successCode(res, dataNewTicket)
        } else {
            errCode(res, 'Không thấy dữ liệu')
        }
    } catch {
        failCode(res)
    }
}
// GET lấy danh sách phòng vé
const getTicketList = async (req, res) => {
    try {
        let dataTickets = await models.LichChieu.findAll();
        if (dataTickets) {
            successCode(res, dataTickets)
        } else {
            errCode(res, 'Không tìm thấy lịch chiếu')
        }
    } catch {
        failCode(res)
    }
}
// POST tạo lịch chiếu
const createShowTime = async (req, res) => {
    try {
        let { ma_phim,
            ngay_gio_chieu,
            ma_rap,
            gia_ve } = req.body;
        let newShowTime = {
            ma_phim,
            ngay_gio_chieu,
            ma_rap,
            gia_ve
        }
        const dataNewShowTime = await models.LichChieu.create(newShowTime);
        if (dataNewShowTime) {
            successCode(res, dataNewShowTime)
        } else {
            errCode(res, 'Lịch chiếu đã có rồi')
        }
    } catch {
        failCode(res)
    }

}
module.exports = {
    bookTicket,
    getTicketList,
    createShowTime
}