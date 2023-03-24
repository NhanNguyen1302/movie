const DataTypes = require("sequelize").DataTypes;
const _Banner = require("./Banner");
const _CumRap = require("./CumRap");
const _Datve = require("./Datve");
const _Ghe = require("./Ghe");
const _He_thong_rap = require("./He_thong_rap");
const _LichChieu = require("./LichChieu");
const _NguoiDung = require("./NguoiDung");
const _Phim = require("./Phim");
const _RapPhim = require("./RapPhim");

function initModels(sequelize) {
  const Banner = _Banner(sequelize, DataTypes);
  const CumRap = _CumRap(sequelize, DataTypes);
  const Datve = _Datve(sequelize, DataTypes);
  const Ghe = _Ghe(sequelize, DataTypes);
  const He_thong_rap = _He_thong_rap(sequelize, DataTypes);
  const LichChieu = _LichChieu(sequelize, DataTypes);
  const NguoiDung = _NguoiDung(sequelize, DataTypes);
  const Phim = _Phim(sequelize, DataTypes);
  const RapPhim = _RapPhim(sequelize, DataTypes);

  RapPhim.belongsTo(CumRap, { as: "ma_cum_rap_CumRap", foreignKey: "ma_cum_rap"});
  CumRap.hasMany(RapPhim, { as: "RapPhims", foreignKey: "ma_cum_rap"});
  CumRap.belongsTo(He_thong_rap, { as: "ma_he_thong_rap_He_thong_rap", foreignKey: "ma_he_thong_rap"});
  He_thong_rap.hasMany(CumRap, { as: "CumRaps", foreignKey: "ma_he_thong_rap"});
  Datve.belongsTo(LichChieu, { as: "ma_lich_chieu_LichChieu", foreignKey: "ma_lich_chieu"});
  LichChieu.hasMany(Datve, { as: "Datves", foreignKey: "ma_lich_chieu"});
  Datve.belongsTo(NguoiDung, { as: "tai_khoan_NguoiDung", foreignKey: "tai_khoan"});
  NguoiDung.hasMany(Datve, { as: "Datves", foreignKey: "tai_khoan"});
  Banner.belongsTo(Phim, { as: "ma_phim_Phim", foreignKey: "ma_phim"});
  Phim.hasMany(Banner, { as: "Banners", foreignKey: "ma_phim"});
  LichChieu.belongsTo(Phim, { as: "ma_phim_Phim", foreignKey: "ma_phim"});
  Phim.hasMany(LichChieu, { as: "LichChieus", foreignKey: "ma_phim"});
  Ghe.belongsTo(RapPhim, { as: "ma_rap_RapPhim", foreignKey: "ma_rap"});
  RapPhim.hasMany(Ghe, { as: "Ghes", foreignKey: "ma_rap"});
  LichChieu.belongsTo(RapPhim, { as: "ma_rap_RapPhim", foreignKey: "ma_rap"});
  RapPhim.hasMany(LichChieu, { as: "LichChieus", foreignKey: "ma_rap"});

  return {
    Banner,
    CumRap,
    Datve,
    Ghe,
    He_thong_rap,
    LichChieu,
    NguoiDung,
    Phim,
    RapPhim,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
