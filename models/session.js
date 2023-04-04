const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); // your Sequelize instance

class Session extends Model {}

Session.init(
  {
    sid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    expires: {
        type: DataTypes.DATE,
      },
      data: {
        type: DataTypes.TEXT,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sessions',
  }
);

module.exports = Session;
