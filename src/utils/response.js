
// 200
const successCode = (res, data, message) => {
    let dataSend = {
        message: message,
        data: data
    }
    res.status(200).send(dataSend);
};
//400
const errCode = (res, data, message) => {
    let dataSend = {
        message: message,
        data: data
    }
    res.status(400).send(dataSend);
};
// 500
const failCode = (res) => {
    let dataSend = {
        message: 'Lỗi backend',
    }
    res.status(500).send(dataSend);
};

module.exports = {
    successCode,
    failCode,
    errCode
}