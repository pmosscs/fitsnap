require("dotenv").config();
const { User } = require("./models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const createToken = (username, id) => {
  return jwt.sign({ username, id }, SECRET, { expiresIn: "2 days" });
};

module.exports = {
  //   createUser: async (req, res) => {
  //     await User.create({
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: req.body.password,
  //       profile_URL: null,
  //     });
  //     res.status(200).send("user created");
  //   },

  register: async (req, res) => {
    console.log("this is the register endpoint controller");
    try {
      const { username, email, password } = req.body;
      const foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res.sendStatus(200).send("username exists");

        //* would this be a good place to do an email check?
      } else {
        console.log("no user found, start creating user");
        //this is the registration:
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        console.log(hash);
        const newUser = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: hash,
          profile_URL: null,
        });
        const token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );
        console.log("token is ", token);
        console.log(newUser);
        const exp = Date.now() + 1000 * 60 * 60 * 48;
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token,
          exp,
        });
      }
    } catch (error) {
      console.log(error, "register try error");
      res.sendStatus(400);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password, email } = req.body;
      const foundUser = await User.findOne({ where: { username, email } });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.password
        );
        if (isAuthenticated) {
          const token = createWebToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            token,
            exp,
          });
        } else {
          res.status(400).send("connot log in 1");
        }
      } else {
        res.status(400).send("cannot log in 2");
      }
    } catch (error) {
      console.log("error on the login try");
      console.log(error);
      res.sendStatus(400);
    }
  },
};