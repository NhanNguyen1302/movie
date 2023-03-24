const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Banner.init(sequelize, DataTypes);
}

class Banner extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ma_banner: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ma_phim: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Phim',
        key: 'ma_phim'
      }
    },
    hinh_anh: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Banner',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ma_banner" },
        ]
      },
      {
        name: "ma_phim",
        using: "BTREE",
        fields: [
          { name: "ma_phim" },
        ]
      },
    ]
  });
  }
}
