const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_WORD || "secret";

function verify(token) {
  return jwt.verify(token, SECRET, { expiresIn: "1h" });
}

function sign(payload) {
  return jwt.sign(payload, SECRET);
}

module.exports = {
  verify,
  sign,
};
