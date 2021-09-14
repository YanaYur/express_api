const express = require("express");
const Router = express.Router();
const UsersControllers = require("./Controllers");

Router.post("/", UsersControllers.createUser);
Router.get("/:userId", UsersControllers.readUser);

module.exports = Router;
