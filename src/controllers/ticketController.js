
const {successCode, errCode, failCode} = require('../utils/response');
const initModels = require("../models/init-models")
const sequelize = require("../models/index")
const models = initModels(sequelize);


// POST đặt vé
const bookTicket = async (req, res) => {
        console.log("312312")
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
    console.log("getTicketList", getTicketList)
}

module.exports = {
    bookTicket,
    getTicketList
}