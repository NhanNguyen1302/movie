const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return He_thong_rap.init(sequelize, DataTypes);
}

class He_thong_rap extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ma_he_thong_rap: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ten_he_thong_rap: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'He_thong_rap',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ma_he_thong_rap" },
        ]
      },
    ]
  });
  }
}
