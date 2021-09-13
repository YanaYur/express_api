const express = require("express");
const Router = express.Router();
const Controllers = require("./Controllers");

Router.post("/signin", Controllers.signIn).post("/login", Controllers.logIn);

module.exports = Router;
