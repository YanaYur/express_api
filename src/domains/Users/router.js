const express = require("express");
const UserRouter = express.Router();
const UsersControllers = require("./Controllers");

UserRouter.post("/", UsersControllers.createUser).get(
  "/:userId",
  UsersControllers.readUser
);

module.exports = UserRouter;
