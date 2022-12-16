const { User } = require("./models");

module.exports = {
  createUser: async (req, res) => {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profile_URL: null,
    });
    res.status(200).send("user created");
  },
};
