import products from "../models/product.model.js";

export async function getProducts(req, res, next) {
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

export async function getProductById(req, res, next) {
  try {
    const { id } = req.params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    res.status(200).json({ status: "success", product: data });
  }
  catch (error) {
    next(error);
   }
}


