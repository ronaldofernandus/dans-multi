"use strict";
const { encrypt } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      photoProfile: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (User, options) => {
          User.password = encrypt(User.password);
          User.photoProfile =
            User.photoProfile || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
