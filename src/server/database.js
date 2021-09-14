const mongoose = require("mongoose");
let collections;

async function start({ uri, options }) {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(uri, options);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  start,
};
