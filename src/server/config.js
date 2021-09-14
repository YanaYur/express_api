const config = require("config");
require("dotenv").config();
const ENV = process.env.NODE_ENV;

function loadConfig() {
  return config;
}

module.exports = {
  loadConfig,
};
