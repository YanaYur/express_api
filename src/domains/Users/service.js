let Users = require("./module");

/**
 * Creates a new user if it does not exists yet
 *
 * @param {{
 *  email:string,
 *  name:string,
 *  password:string
 * }} userData - user data
 * @returns {} created user
 */
async function createUser(userData) {
  const { email, name, password } = userData;

  const existingUser = await Users.findOne({ email });

  if (existingUser) throw Error("User already exists");

  const createdUser = await Users.create({ email, name, password });

  return createdUser;
}

async function readUserById(id) {
  return await Users.findById(id);
}

async function findByEmail(email) {
  return await Users.findOne({ email }).select('+password')
}

module.exports = {
  createUser,
  readUserById,
  findByEmail,
};
