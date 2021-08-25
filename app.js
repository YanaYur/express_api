const Products= require ('./products.js');

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencode({extended:true}));

app.get('/', (req, res) => {
  res.json(Products);
})

app.post('add', (req, res)=>{
    console.log(req.body.id);
    res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

