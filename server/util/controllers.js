require("dotenv").config();
const { User, Monthly_Stat } = require("./models");
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
      const foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.password
        );
        if (isAuthenticated) {
          const token = createToken(
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

  getUserInfo: async (req, res) => {
    try {
      const { userId } = req.params;
      const uInfo = await User.findOne({
        where: { id: userId },
      });
      res.status(200).send({
        username: uInfo.dataValues.username,
        userId: uInfo.dataValues.id,
        profile_URL: uInfo.dataValues.profile_URL,
      });
    } catch (error) {
      console.log("error in getUserInfo");
      console.log(error);
      res.sendStatus(400);
    }
  },

  submitSnap: async (req, res) => {
    const { mile, pullUps, pushUps, month } = req.body;
    try {
      // create a variable that uses monthlystat.create and add in ^^
      const newEntry = await Monthly_Stat.create({
        month: req.body.month,
        mile: req.body.mile,
        push_ups: req.body.pushUps,
        pull_ups: req.body.pullUps,
      });
      res.status(200).send("Fitsnap Submitted!");
    } catch (error) {
      console.log("error in submit snap controller");
      console.log(error);
    }
  },
};
