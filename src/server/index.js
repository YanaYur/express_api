const UserRouter = require("../domains/Users/router");
const AuthRouter = require("../domains/Auth/router");
const bodyParser = require("body-parser");
const Database = require("./database");
const Config = require("./config");
const AuthMiddleware = require("../middlewares/auth");
const { notFoundMiddleware } = require("../middlewares/notFound");

async function config(app) {
  const configFile = Config.loadConfig();
  const mongoDb = configFile.get("mongoDB");

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  await Database.start(mongoDb);

  // OPENED ACCESS
  app.use("/auth", AuthRouter);

  // AUTH
  app.use(AuthMiddleware.tokenAuthentication);

  // FORBIDDEN
  app.use("/users", UserRouter);

  app.use(notFoundMiddleware);
}

module.exports = {
  config,
};
