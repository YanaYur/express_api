const { Schema, model, ObjectId } = require("mongoose");
const CryptoService = require("../../helpers/crypt.service");

const CardItem = new Schema({
  title: { type: String },
  quantity: { type: Number, min: 1 },
  productId: { type: ObjectId },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true, select: false },
  card: [CardItem],
});

UserSchema.pre("create", async function (next) {
  const user = this;
  const encriptedPassword = await CryptoService.crypt(user.password);
  user.password = encriptedPassword;
});

UserSchema.pre("save", async function (next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  const encriptedPassword = await CryptoService.crypt(user.password);
  user.password = encriptedPassword;
});

UserSchema.methods.comparePassword = async function (encryptedPassword) {
  return await CryptoService.compare(encryptedPassword, this.password);
};

module.exports = model("Users", UserSchema);
