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
const { createUser } = require("./util/controller");

server.post("/users", createUser);

//and sync the db to your database
db.sync();
//tell your server to listen
server.listen(3000, () => console.log("server running on 3000"));
