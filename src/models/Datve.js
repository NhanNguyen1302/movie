const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return Datve.init(sequelize, DataTypes);
}

class Datve extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tai_khoan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NguoiDung',
        key: 'tai_khoan'
      }
    },
    ma_lich_chieu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LichChieu',
        key: 'ma_lich_chieu'
      }
    },
    ma_ghe: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Datve',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tai_khoan",
        using: "BTREE",
        fields: [
          { name: "tai_khoan" },
        ]
      },
      {
        name: "ma_lich_chieu",
        using: "BTREE",
        fields: [
          { name: "ma_lich_chieu" },
        ]
      },
    ]
  });
  }
}
