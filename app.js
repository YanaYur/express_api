const express = require('express');
const app = express();
const server = require('./src/server')

const PORT = process.env.PORT || 3001;

(async () => {

  await server.config(app)

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
})()


