const express = require("express");
const Router = express.Router();
const Controllers = require("./Controllers");

Router.get("/", Controllers.fetchAvailableCars);

module.exports = Router;
