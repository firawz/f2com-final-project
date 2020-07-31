'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produk.belongsToMany(models.User, {through: models.Keranjang})
      Produk.belongsTo(models.User)

    }
  };
  Produk.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};