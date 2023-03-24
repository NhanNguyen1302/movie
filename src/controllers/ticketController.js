
const sequelize = require('../models/Datve');
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const {successCode, errCode, failCode} = require('../utils/response');

// POST đặt vé
const bookTicket = async (req, res) => {

        let {tai_khoan, ma_lich_chieu, ma_ghe} = req.body;
        let newTicket = {
            tai_khoan,
            ma_lich_chieu,
            ma_ghe
        }
        const dataNewTicket = await models.Datve.create(newTicket);
        if(dataNewTicket) {
            successCode(res, dataNewTicket, 'Thành công!')
        }else {
            errCode(res, 'Thất bại!')
        }
    
   
}
// GET lấy danh sách vé
const getTicketList = async (req, res) => {
    
}

module.exports = {
    bookTicket,
    getTicketList
}