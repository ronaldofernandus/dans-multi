const { User } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { getJwt, getVerification } = require("../helpers/jwtFile");

class userController {
  static async getUsersById(req, res) {
    try {
      const id = req.userData.id;
      let getUsersById = await User.findByPk(id);
      res.status(200).json(getUsersById);
    } catch (error) {
      //   console.log(error);
      res.status(500).json(error);
    }
  }

  static async getUsers(req, res) {
    try {
      //   const id = Number(req.userData.id);
      let getUsers = await User.findAll({});
      res.status(200).json(getUsers);
    } catch (error) {
      //   console.log(error);
      res.status(500).json(error);
    }
  }
  static async register(req, res) {
    try {
      const { photoProfile,email, username, password } = req.body;
      let register = await User.create({
        photoProfile,
        email,
        username,
        password,
      });
      res.status(201).json(register);
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let login = await User.findOne({
        where: {
          username,
        },
      });
      // console.log(login);
      if (login) {
        if (decrypt(password, login.password)) {
          let get_token = getJwt(login);
          res.status(200).json({
            get_token,
          });
        } else {
          res.status(403).json({
            message: "Invalid password",
          });
        }
      } else {
        res.status(404).json({
          message: "Not found",
        });
      }
    } catch (error) {
      console.log(error);
      //   res.status(500).json(error);
    }
  }
}

module.exports = userController;
