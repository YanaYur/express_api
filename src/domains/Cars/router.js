const express = require("express");
const Router = express.Router();
const Controllers = require("./controllers");

Router.get("/", Controllers.fetchAvailableCars);

module.exports = Router;
