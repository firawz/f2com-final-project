'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keranjang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Keranjang.belongsTo(models.User)
      Keranjang.belongsToMany(models.Produk, {through: models.KeranjangProduk})
    }
  };
  Keranjang.init({
    produk: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kuantitas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Keranjang',
  });
  return Keranjang;
};