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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
    });

  Comment.associate = function(models) {
    Comment.belongsTo(models.Blog, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  module.exports = Comment