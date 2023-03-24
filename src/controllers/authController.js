const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {errCode} = require('../utils/response');
const hashPass = (passWord) => {
    return bcrypt.hashSync(passWord, 10);
};
const comparePass = (passWord, hashPassword) => {
    return bcrypt.compareSync(passWord, hashPassword);
};
const generateToken = (data) => {
    const token = jwt.sign(data, 'key', {
    algorithm: 'HS256',expiresIn: '5y' });
    return token;
};
const verifyToken = (token) => {
    try {
        return jwt.verify(token, 'key');
    }catch {
        return false;
    }
};
const checkToken = (req, res, next) => {
    const {authentication} = req.headers;
    if(authentication) {
        if(verifyToken(authentication)) {
            // res.send(jwt.decode(authentication))
            next();
        }else {
            errCode(res, 'Token không hợp lệ');
        }
    }else {
        errCode(res, 'Token không có');
    }      
}
module.exports = {
    hashPass,
    comparePass,
    generateToken,
    verifyToken,
    checkToken
}