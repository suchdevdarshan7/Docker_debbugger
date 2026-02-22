import express from 'express';
const app = express();
const port = 3000;
import productRoutes from './routes/product.routes.js';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import connect_db from './db/db_start.js';

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("Health Check Ok!");
})

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes)

app.listen(port, () => {
  console.log("The server is running in port 3000");
  connect_db()
})


