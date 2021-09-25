const mongoose = require("mongoose");
let collections;

async function start({ uri, options }) {
  try {
    const connectUri =
      process.env.NODE_ENV === "production" ? process.env.DB_URI : uri;

    // Connect to the MongoDB cluster
    await mongoose.connect(connectUri, options);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  start,
};
