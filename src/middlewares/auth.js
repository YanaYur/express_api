const TokenService = require("../helpers/token.service");

function tokenAuthentication(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({ message: "Token not provided" });
      
    const token = authorization.split(" ")[1];
    const payload = TokenService.verify(token);
    req.payload = payload;
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }

  next();
}

module.exports = {
  tokenAuthentication,
};
