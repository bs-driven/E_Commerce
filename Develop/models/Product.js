// import important parts of sequelize library
const { Model, DataTypes, NUMERIC, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type:DataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isValue: DataTypes.DECIMAL,
      },
    },
    stock:{
      type: DataTypes.INTERGER,
      allowNull:false,
      defaultValue: 10,
      validate: {
        isValue: NUMERIC,
      },
    },
    category_id:{
      type: DataTypes.INTERGER,
      reference: {
        model: 'catergory',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
