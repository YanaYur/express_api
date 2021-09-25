const express = require("express");
const Router = express.Router();
const Controllers = require("./controllers");

Router.post("/signin", Controllers.signIn);
Router.post("/login", Controllers.logIn);

module.exports = Router;
