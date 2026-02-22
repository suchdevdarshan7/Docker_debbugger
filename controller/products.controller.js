import products from "../models/product.model.js";

async function getProducts(req, res, next) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const insertData = await products.create(data);
    res.status(200).json({ status: "success", products: data });
  }
  catch (error) {
    next(error);
  }
}

export default getProducts;
