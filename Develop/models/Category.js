const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newCategoryData) => {
        newCategoryData.category_name = await newCategoryData.category_name.toUpperCase();
        return newCategoryData;
      },

      beforeUpdate: async (updatedCategoryData) => {
        updatedCategoryData.category_name = await updatedCategoryData.category_name.toUpperCase();
        return updatedCategoryData;
      },
    },


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
