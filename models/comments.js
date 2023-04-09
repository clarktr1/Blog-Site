const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); // your Sequelize instance

class Comment extends Model {}

Comment.init(
    {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
    });

  module.exports = Comment