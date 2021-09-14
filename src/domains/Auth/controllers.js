const UsersService = require("../Users/Service");
const TokenService = require("../../helpers/token.service");

async function signIn(req, res) {
  try {
    const { body } = req;
    const createdUser = await UsersService.createUser(body);

    delete createdUser.password;

    return res.status(201).json(createdUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function logIn(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UsersService.findByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validated = await user.comparePassword(password);
    if (!validated) {
      return res.status(403).json({ message: "Incorrect password" });
    }

    const token = TokenService.sign(user.toObject());

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  signIn,
  logIn,
};
