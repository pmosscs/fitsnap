//this is the server
const express = require("express");
const cors = require("cors");
const server = express();
const { db } = require("./util/database");
const { User } = require("./util/models");

//middleware
server.use(express.json());
server.use(cors());

//endpoints
const { register, login } = require("./util/controllers");
// server.post("/users", createUser);
// here there will be enpoints for login and register, not create user. create user will be inside the register enpoint function.
server.post("/register", register);
server.post("/login", login);

//and sync the db to your database
db.sync().then(() => {
  server.listen(3000, () => console.log("server running on 3000"));
});
