//this is the server
const express = require("express");
const cors = require("cors");
const server = express();
const { db } = require("./util/database");

//middleware
server.use(express.json());
server.use(cors());

//endpoints

//and sync the db to your database
db.sync();
//tell your server to listen
server.listen(3000, () => console.log("server running on 3000"));
