'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KeranjangProduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KeranjangProduk.belongsTo(models.Keranjang)
      KeranjangProduk.belongsTo(models.Produk)
    }
  };
  KeranjangProduk.init({
    ProdukId: DataTypes.INTEGER,
    KeranjangId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KeranjangProduk',
  });
  return KeranjangProduk;
};