'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Keranjang)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate : {
        isEmpty(value){
          if(value == ''){
            throw new Error('Username Tidak Boleh Kosong')
          }
        },
        isLength(value){
          if(value.length < 3){
            throw new Error('Username Minimal 3 Karakter')
          }
        }
      }
    },
      password: {
        type: DataTypes.STRING,
        validate : {
          isEmpty(value){
            if(value == ''){
              throw new Error('Password Tidak Boleh Kosong')
            }
          },
          isLength(value){
            if(value.length < 6){
              throw new Error('Password Minimal 6 Karakter')
            }
          },
          isGood(value){
            const number = '1234567890'
            let count = 0
            for (let i = 0; i < value.length; i++) {
              for (let j = 0; j < number.length; j++) {
                if(value[i] == number[j]) {count++}
              }
            }
            if(count == 0){
              throw new Error(`Password harus ada numbernya`)
            }
          }
        }
      }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};