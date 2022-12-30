//this is the server
const express = require("express");
const cors = require("cors");
const server = express();
const { db } = require("./util/database");
const { User, Monthly_Stat } = require("./util/models");

//middleware
server.use(express.json());
server.use(cors());

//relationships
User.hasMany(Monthly_Stat);

//endpoints
const {
  register,
  login,
  getUserInfo,
  submitSnap,
  changeImage,
} = require("./util/controllers");

const { isAuthenticated } = require("./middleware/isAuthenticated");

// here there will be enpoints for login and register, not create user. create user will be inside the register enpoint function.
server.post("/register", register);
server.post("/login", login);
server.get("/userinfo/:userId", getUserInfo);
server.post("/submitsnap", submitSnap);
server.put("/userinfo/:userId", changeImage);

//and sync the db to your database
db.sync().then(() => {
  server.listen(4000, () => console.log("server running on 4000"));
});
