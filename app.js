const Products = require('./products.js');
const UserRouter = require('./src/domains/Users/Routes')
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', UserRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

