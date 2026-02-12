const express = require('express');
const { getProducts } = require('./controller/products.controller');
const app = express();
const port = 3000;
const morgan = require('morgan');


app.use(morgan('dev'));

app.get ('/',(req,res) => {
  res.send("Health Check Ok!");
})

app.get('/products',getProducts);

app.listen(port,()=>{
  console.log("The server is running in port 3000");
})


